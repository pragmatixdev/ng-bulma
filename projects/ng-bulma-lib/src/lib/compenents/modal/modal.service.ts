import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, TemplateRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ModalContainerComponent } from './modal-container.component';
import { ComponentType } from '@angular/cdk/typings/portal';
import { ModalRef } from './modal-ref';
import { MODAL_DATA } from './modal.tokens';
import { ModalConfig } from './mdoal-config';

const DEFAULT_CONFIG: ModalConfig = {
  hasBackdrop: true,
  disableClose: false,
  backdropClass: 'modal-background',
  panelClass: 'tm-file-preview-dialog-panel',
  data: null
};

@Injectable({
  providedIn: 'root',
})
export class BmModal {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private overlay: Overlay
  ) {}

  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T>, config: ModalConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);
    const dialogContainer = this._attachDialogContainer(overlayRef, config);
    const dialogRef = this._attachDialogContent<T, R>(componentOrTemplateRef,
                                                      dialogContainer,
                                                      overlayRef,
                                                      dialogConfig);
    return dialogRef;
  }

  private createOverlay(config: ModalConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: ModalConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private _attachDialogContent<T, R>(
    componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,
    dialogContainer: ModalContainerComponent,
    overlayRef: OverlayRef,
    config: ModalConfig): ModalRef {

    // Create a reference to the dialog we're creating in order to give the user a handle
    // to modify and close it.
    const dialogRef =
      new ModalRef(overlayRef);

    // When the dialog backdrop is clicked, we want to close it.
    if (config.hasBackdrop) {
      overlayRef.backdropClick().subscribe(() => {
        if (!config.disableClose) {
          dialogRef.close();
        }
      });
    }

    if (componentOrTemplateRef instanceof TemplateRef) {
      dialogContainer.attachTemplatePortal(
        new TemplatePortal<T>(componentOrTemplateRef, null!,
          <any>{ $implicit: config.data, dialogRef }));
    } else {
      const injector = this.createInjector(config, dialogRef, dialogContainer);
      const contentRef = dialogContainer.attachComponentPortal<T>(
        new ComponentPortal(componentOrTemplateRef, undefined, injector));
    }
    return dialogRef;
  }

  private createInjector(config: ModalConfig, dialogRef: ModalRef, dialogContainer): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(ModalRef, dialogRef);
    injectionTokens.set(MODAL_DATA, config.data);
    injectionTokens.set(ModalContainerComponent, dialogContainer);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private _attachDialogContainer(overlay: OverlayRef, config: ModalConfig): ModalContainerComponent {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = new PortalInjector(userInjector || this.injector, new WeakMap([
      [ModalConfig, config]
    ]));
    const containerPortal =
      new ComponentPortal(ModalContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlay.attach<ModalContainerComponent>(containerPortal);

    return containerRef.instance;
  }


}

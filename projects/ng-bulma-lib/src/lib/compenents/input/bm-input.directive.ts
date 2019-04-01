import { Directive, Input, Optional, Self } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Directive({
  selector: '[bmInput]',
  host: {
    'class': 'bm-input',
    '[attr.placeholder]': 'placeholder',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.readonly]': 'readonly && !_isNativeSelect || null',
    '[attr.aria-invalid]': 'errorState',
    '[attr.aria-required]': 'required.toString()',
    '(blur)': '_focusChanged(false)',
    '(focus)': '_focusChanged(true)',
    '(input)': '_onInput()'
  }
})
export class BmInputDirective {
  constructor(
    @Optional() @Self() public ngControl: NgControl,
    @Optional() _parentForm: NgForm,
  ) {
    console.log(this.disabled)
  }

  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
  }
}

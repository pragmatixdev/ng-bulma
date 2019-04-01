import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmInputDirective } from './bm-input.directive';

@NgModule({
  declarations: [BmInputDirective],
  imports: [CommonModule],
  exports: [BmInputDirective]
})
export class BmInputModule {}

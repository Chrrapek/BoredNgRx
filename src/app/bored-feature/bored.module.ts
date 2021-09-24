import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoredComponent } from './bored.component';

@NgModule({
  declarations: [BoredComponent],
  exports: [
    BoredComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoredModule { }

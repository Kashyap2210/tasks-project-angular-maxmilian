import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports:[CommonModule]
})
export class SharedModule {}

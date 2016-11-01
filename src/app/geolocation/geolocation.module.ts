import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationSearchComponent } from './component/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LocationSearchComponent
  ],
  exports: [
    LocationSearchComponent
  ]
})
export class GeolocationModule { }

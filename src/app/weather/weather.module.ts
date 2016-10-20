import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent, WeatherArroundComponent, WeatherPrevisionComponent } from './component/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent
  ],
  exports: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent
  ]
})
export class WeatherModule { }

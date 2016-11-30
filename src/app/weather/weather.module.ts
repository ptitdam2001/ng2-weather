import { OpenWeatherMapService } from './service/open-weather-map.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherConfig } from './weather-config';
import { CurrentWeatherComponent, WeatherArroundComponent, WeatherPrevisionComponent } from './component/index';

import { MeterSecToKmHourPipe, RoundPipe, WeatherNameToIconPipe,
  DegToCompassPipe, DegToCardinalPipe, MomentFormatPipe } from './pipe/index';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent,
    MeterSecToKmHourPipe,
    RoundPipe,
    WeatherNameToIconPipe,
    DegToCompassPipe,
    DegToCardinalPipe,
    MomentFormatPipe
  ],
  providers: [
    OpenWeatherMapService
  ],
  exports: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent,
    MeterSecToKmHourPipe,
    WeatherNameToIconPipe,
    RoundPipe,
    DegToCompassPipe,
    DegToCardinalPipe,
    MomentFormatPipe
  ]
})
export class WeatherModule {
  static forRoot(config: WeatherConfig): ModuleWithProviders {
    return {
      ngModule: WeatherModule,
      providers: [
        {provide: WeatherConfig, useValue: config }
      ]
    };
  }
}

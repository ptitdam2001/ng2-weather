import { OpenWeatherMapService } from './service/open-weather-map.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent, WeatherArroundComponent, WeatherPrevisionComponent } from './component/index';
import { MeterSecToKmHourPipe } from './pipe/meter-sec-to-km-hour.pipe';
import { RoundPipe } from './pipe/round.pipe';
import { WeatherNameToIconPipe } from './pipe/weather-name-to-icon.pipe';
import { WeatherConfig } from './weather-config';
import { DegToCompassPipe } from './pipe/deg-to-compass.pipe';
import { DegToCardinalPipe } from './pipe/deg-to-cardinal.pipe';


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
    DegToCardinalPipe
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
    DegToCardinalPipe
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

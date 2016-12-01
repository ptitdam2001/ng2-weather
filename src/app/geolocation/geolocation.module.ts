import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationSearchComponent } from './component/index';
import { GeocodeConfig } from './geocode-config';
import { GoogleGeolocationService } from './service/google/google-geolocation.service';
import { LocaleGeolocationService } from './service/locale-geolocation.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    LocationSearchComponent
  ],
  providers: [
    GoogleGeolocationService,
    LocaleGeolocationService
  ],
  exports: [
    LocationSearchComponent,
    // GoogleGeolocationService
  ]
})
export class GeolocationModule {
  static forRoot(config: GeocodeConfig): ModuleWithProviders {
    return {
      ngModule: GeolocationModule,
      providers: [
        {provide: GeocodeConfig, useValue: config }
      ]
    };
  }

}

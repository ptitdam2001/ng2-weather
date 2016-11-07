import { Http } from '@angular/http';
import { Injectable, Optional, Inject } from '@angular/core';

import { GoogleGeocodeParameters } from './google-geocode-parameters';
import { GeolocationServiceInterface } from '../geolocationServiceInterface';

import 'rxjs/add/operator/map';
import { GeocodeConfig } from '../../geocode-config';


@Injectable()
export class GoogleGeolocationService implements GeolocationServiceInterface {

  private wsUrl = 'https://maps.googleapis.com/maps/api/geocode/';
  private key: string = '';
  private format: string = 'json';
  private ws: Http;

  constructor(@Inject(Http) http: Http, @Optional() config: GeocodeConfig) {
    this.ws = http;
    if (config) {
      this.key = config.key;
      this.format = config.format;
    }
  }

  private buildUri(): string {
    return this.wsUrl + this.format;
  }

  public searchFromString(address: string) {
    let parameters = new GoogleGeocodeParameters(address, this.key);

    return this.ws.get(this.buildUri(), {search: parameters.toUrlSearchParams()})
      .map((response) => response.json().results);
  }

  // public searchFromCoordinates(coord: Coordinates) {}

}

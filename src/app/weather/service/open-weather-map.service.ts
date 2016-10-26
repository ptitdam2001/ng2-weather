import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { WeatherSearchParams, Coordinates } from './classes';

const API_KEY = '59fd2768e2c9abcb3cf35e48643a34f5';

const API_URL = 'http://api.openweathermap.org/data/2.5/';

@Injectable()
export class OpenWeatherMapService {

  private url: string = API_URL + 'weather';
  private findUrl: string = API_URL + 'find';

  constructor(private http: Http) { }

  /**
   * Get the current weather
   * @params params WeatherSearchParams
   * @return Observable<Response>
   */
  getCurrentWeather(params: WeatherSearchParams) {
    let options = params.toUrlSearchParams(API_KEY);
    return this.http.get(this.url, {search: options});
  }

  /**
   * Get the weather arround a given coordinate
   * @params coordinates Coordinates
   * @params count number
   * @return Observable<Response>
   */
  getWeatherArround(coordinates: Coordinates, count = 10) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('lon', coordinates.lon.toString());
    params.set('lat', coordinates.lat.toString());
    params.set('cnt', count.toString());
    params.set('appid', API_KEY);

    return this.http.get(this.findUrl, {search: params});
  }
}

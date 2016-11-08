import { Component, OnInit } from '@angular/core';
import { LocaleGeolocationService } from './geolocation/service/locale-geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './../../node_modules/flexboxgrid/dist/flexboxgrid.css',
    './app.component.scss'
  ]
})
export class AppComponent implements OnInit {

  public currentCoordinates;

  constructor(private geolocationLocal: LocaleGeolocationService) { }

  ngOnInit() {
    this.geolocationLocal.getLocation({})
    .subscribe(
        (position) => {
          this.currentCoordinates = {
            lon: position.coords.longitude,
            lat: position.coords.latitude
          };
        },
        (error) => { }
    );
  }

  public onSelectLocation(selected) {
    this.currentCoordinates = selected;
  }
}

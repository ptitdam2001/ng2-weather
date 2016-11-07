import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './../../node_modules/flexboxgrid/dist/flexboxgrid.css',
    './app.component.scss'
  ]
})
export class AppComponent {

  public currentCoordinates;

  constructor() {
    this.currentCoordinates = {
      lon: 0,
      lat: 43
    };
  }

  public onSelectLocation(selected) {
    this.currentCoordinates = selected;
  }
}

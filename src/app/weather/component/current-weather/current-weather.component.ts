import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngw-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() city: string;

  constructor() { }

  ngOnInit() {
  }

}

import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GoogleGeolocationService } from '../../service/google/google-geolocation.service';

import 'rxjs';
// import { Observable } from 'rxjs';
import { LocationData } from '../../model/location-data';


@Component({
  selector: 'location-search-bar',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  public items;
  public term = new FormControl();

  @Output() onSelect = new EventEmitter <LocationData>();

  constructor(private service: GoogleGeolocationService) {}

  ngOnInit() {
    this.items = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => {
        return this.service.searchFromString(term);
      });
  }

  public select(item) {
    //transmit selected area to parent component with (onSelect)
    let data = new LocationData();
    data.long_name = item.formatted_address;
    data.lat = item.geometry.location.lat;
    data.lon = item.geometry.location.lng;

    this.onSelect.emit(data);
    // console.log('click', item);
  }

}

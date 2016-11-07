import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GoogleGeolocationService } from '../../service/google/google-geolocation.service';

import 'rxjs';
// import { Observable } from 'rxjs';


@Component({
  selector: 'location-search-bar',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {

  public items;
  public term = new FormControl();

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
    console.log('click', item);
  }

}

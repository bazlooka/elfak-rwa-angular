import { Component, OnInit, NgZone } from '@angular/core';

import { AppState } from 'src/app/app.state';

import { Store } from '@ngrx/store';
import { selectMap, selectPins } from '../../store/location-map.selectors';
import { Observable } from 'rxjs';
import { Map } from '../../models/map.interface';
import { icon, Layer, marker, tileLayer } from 'leaflet';
import { Router } from '@angular/router';
import { LocationPin } from '../../models/location-pin.interface';
import { environment } from 'src/environments/environment';

const PIN_SIZE = 38;

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss'],
})
export class LocationMapComponent implements OnInit {
  map$: Observable<Map> | null = null;

  baseLayer = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  });

  pinLayers: Layer[] | null = null;

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.map$ = this.store.select(selectMap);
    this.store.select(selectPins).subscribe((pins) => {
      this.createMarkers(pins);
    });
  }

  createMarkers(pins: LocationPin[]) {
    this.pinLayers = pins.map((pin) => {
      return marker(pin.position, {
        icon: icon({
          iconSize: [PIN_SIZE, PIN_SIZE],
          iconUrl: environment.mediaUrl + pin.markerPath,
        }),
        title: pin.name,
        riseOnHover: true,
      })
        .bindTooltip(`${pin.name} (${pin.typeName})`)
        .on('click', () => {
          this.ngZone.run(() => {
            this.router.navigateByUrl(`/location/${pin.id}`);
          });
        });
    });
  }
}

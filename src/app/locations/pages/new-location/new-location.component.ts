import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, withLatestFrom } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { selectAdminLocationTypes } from 'src/app/admin/store/admin-location-types.selectors';
import { AdminLocationType } from 'src/app/admin/models/admin-location-type.dto';
import { loadAdminLocationTypes } from 'src/app/admin/store/admin-location-types.actions';
import { icon, LatLng, Layer, marker, tileLayer } from 'leaflet';
import { createNewLocation, loadHomepage } from '../../store/locations.actions';
import { selectMap } from '../../store/location-map.selectors';
import { environment } from 'src/environments/environment';
import { Map } from '../../models/map.interface';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss'],
})
export class NewLocationComponent implements OnInit {
  formGroup = this.formBuilder.group({
    type: ['', [Validators.required]],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    address: ['', [Validators.required]],
    website: ['', [Validators.required]],
  });

  locTypes$: Observable<AdminLocationType[]> | null = null;

  map$: Observable<Map> | null = null;

  baseLayer = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  });

  pinLayer: Layer | null = null;

  locationPosition: LatLng | null = null;

  selectedFiles: File[] | null = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadAdminLocationTypes());
    this.store.dispatch(loadHomepage());
    this.locTypes$ = this.store.select(selectAdminLocationTypes);

    this.map$ = this.store.select(selectMap);

    this.map$.subscribe((map) => {
      if (map) {
        this.locationPosition = map.center;

        this.pinLayer = marker(map.center, {
          icon: icon({
            iconSize: [38, 38],
            iconUrl: environment.mediaUrl + '/add-location.png',
          }),
          title: 'New location',
          riseOnHover: true,
          draggable: true,
        });
        this.pinLayer.on('dragend', (e) => {
          this.locationPosition = e.target.getLatLng();
        });
      }
    });
  }

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  createLocation() {
    const name = this.formGroup?.get(['name'])?.value ?? '';
    const description = this.formGroup?.get(['description'])?.value ?? '';
    const address = this.formGroup?.get(['address'])?.value ?? '';
    const website = this.formGroup?.get(['website'])?.value ?? '';
    const typeId = this.formGroup?.get(['type'])?.value ?? '';

    const longitude = this.locationPosition?.lng.toString() ?? '';
    const latitude = this.locationPosition?.lat.toString() ?? '';

    const images = this.selectedFiles;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('website', website);
    formData.append('typeId', typeId);
    formData.append('longitude', longitude);
    formData.append('latitude', latitude);

    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }

    this.store.dispatch(createNewLocation({ locationData: formData }));
  }
}

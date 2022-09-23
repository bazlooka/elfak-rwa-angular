import { createReducer, on } from '@ngrx/store';
import * as LocationsActions from './locations.actions';
import { LatLng } from 'leaflet';
import { LocationPin } from '../models/location-pin.interface';
import { Map } from '../models/map.interface';

export interface LocationMapState {
  map: Map;
  locationPins: LocationPin[];
}

export const initialState: LocationMapState = {
  map: {
    isShown: false,
    center: new LatLng(0, 0),
    zoom: 0,
  },
  locationPins: [],
};

export const locationMapReducer = createReducer(
  initialState,
  on(LocationsActions.loadHomepageSuccess, (oldState, { homepage }) => {
    return {
      ...oldState,
      ...homepage,
      map: {
        ...oldState.map,
        ...homepage.map,
        isShown: true,
      },
    };
  })
);

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
  on(LocationsActions.loadHomepage, (state) => {
    return { ...state, map: { ...state.map, isShown: false } };
  }),
  on(LocationsActions.loadHomepageSuccess, (state, { homepage }) => {
    return {
      ...state,
      ...homepage,
      map: {
        ...state.map,
        ...homepage.map,
        isShown: true,
      },
    };
  })
);

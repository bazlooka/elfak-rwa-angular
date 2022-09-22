import { createReducer, on } from '@ngrx/store';
import { Homepage } from '../models/homepage.interface';
import * as LocationsActions from './locations.actions';
import { LatLng } from 'leaflet';

export interface LocationsState {
  homepage: Homepage;
}

export const initialState: LocationsState = {
  homepage: {
    map: {
      isShown: false,
      center: new LatLng(0, 0),
      zoom: 0,
    },
    locationPins: [],
    trendingLocations: [],
  },
};

export const locationsReducer = createReducer(
  initialState,
  on(LocationsActions.loadHomepageSuccess, (oldState, { homepage }) => {
    return {
      ...oldState,
      homepage: {
        ...homepage,
        map: {
          ...oldState.homepage.map,
          ...homepage.map,
          isShown: true,
        },
      },
    };
  })
);

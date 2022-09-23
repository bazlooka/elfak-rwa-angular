import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

export const selectLocationsMapFeature = createSelector(
  (state: AppState) => state.locationMap,
  (locations) => locations
);

export const selectMap = createSelector(
  selectLocationsMapFeature,
  (homepage) => homepage.map
);

export const selectPins = createSelector(
  selectLocationsMapFeature,
  (homepage) => homepage.locationPins
);

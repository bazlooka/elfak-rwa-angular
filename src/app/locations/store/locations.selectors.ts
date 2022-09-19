import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

export const selectLocationsFeature = createSelector(
  (state: AppState) => state.locations,
  (locations) => locations
);

export const selectHomepage = createSelector(
  selectLocationsFeature,
  (locations) => locations.homepage
);

import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

export const selectLocationPageFeature = createSelector(
  (state: AppState) => state.locationPage,
  (locationPage) => locationPage
);

export const selectOpenedLocation = createSelector(
  selectLocationPageFeature,
  (locationPage) => locationPage.openedLocation
);

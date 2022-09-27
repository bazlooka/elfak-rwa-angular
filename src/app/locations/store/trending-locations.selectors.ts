import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { TrendingLocationDto } from '../models/trending-location.dto';

export const selectTrendingLocationsFeature = createSelector(
  (state: AppState) => state.trendingLocations,
  (locations) => locations
);

export const selectTrendingLocations = createSelector(
  selectTrendingLocationsFeature,
  (locations) =>
    locations.ids
      .map((id) => locations.entities[id])
      .filter((location) => location != null)
      .map((location) => <TrendingLocationDto>location)
);

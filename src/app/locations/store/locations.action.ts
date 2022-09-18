import { createAction } from '@ngrx/store';

export const loadLocations = createAction('[API] Load locations');
export const loadLocationsSuccess = createAction(
  '[API] Load locations success'
);

export const loadTrendingLocations = createAction(
  '[API] Load trending locations'
);
export const loadTrendingLocationsSuccess = createAction(
  '[API] Load trending locations success'
);

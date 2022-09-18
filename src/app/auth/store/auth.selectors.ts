import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

export const selectAuthFeature = createSelector(
  (state: AppState) => state.auth,
  (auth) => auth
);

export const selectUser = createSelector(
  selectAuthFeature,
  (auth) => auth.user
);

import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AdminLocationType } from '../models/admin-location-type.dto';

export const selectAdminLocationTypesFeature = createSelector(
  (state: AppState) => state.adminLocationTypes,
  (adminLocationTypes) => adminLocationTypes
);

export const selectAdminLocationTypes = createSelector(
  selectAdminLocationTypesFeature,
  (adminLocationTypes) =>
    adminLocationTypes.ids
      .map((id) => adminLocationTypes.entities[id])
      .filter((location) => location != null)
      .map((location) => <AdminLocationType>location)
);

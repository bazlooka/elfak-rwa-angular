import { createAction, props } from '@ngrx/store';
import { AdminLocationType } from '../models/admin-location-type.interface.dto';

export const loadAdminLocationTypes = createAction(
  '[Admin] Load location types'
);

export const loadAdminLocationTypesSuccess = createAction(
  '[Admin] Load location types success',
  props<{ locationTypes: AdminLocationType[] }>()
);

export const createLocationType = createAction(
  '[Admin] Create location type',
  props<{ locationData: FormData }>()
);

export const createLocationTypeSuccess = createAction(
  '[Admin] Create location type success',
  props<{ locationType: AdminLocationType }>()
);

export const editLocationType = createAction(
  '[Admin] Edit location type',
  props<{ id: number; locationData: FormData }>()
);

export const editLocationTypeSuccess = createAction(
  '[Admin] Edit location type success',
  props<{ locationType: AdminLocationType }>()
);

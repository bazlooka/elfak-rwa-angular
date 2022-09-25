import { createAction, props } from '@ngrx/store';
import { AdminLocationType } from '../models/admin-location-type.interface.dto';
import { CreateLocationTypeDto } from '../models/location-type.create.dto';

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

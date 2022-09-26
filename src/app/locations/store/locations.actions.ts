import { createAction, props } from '@ngrx/store';
import { HomepageDto } from '../models/homepage.dto';
import { Location } from '../models/location.interface';

export const loadHomepage = createAction('[API] Load hompage locations');

export const loadHomepageSuccess = createAction(
  '[API] Load homepage locations success',
  props<{ homepage: HomepageDto }>()
);

export const createNewLocation = createAction(
  '[API] Create new location',
  props<{ locationData: FormData }>()
);

export const createNewLocationSuccess = createAction(
  '[API] Create new location success',
  props<{ location: Location }>()
);

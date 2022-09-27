import { createAction, props } from '@ngrx/store';
import { CreateGradeDto } from '../models/grade.create.dto';
import { UpdateGradeDto } from '../models/grade.update.dto';
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

export const gradeLocation = createAction(
  '[API] Grade location',
  props<{ grade: CreateGradeDto }>()
);

export const gradeLocationSuccess = createAction(
  '[API] Grade location success',
  props<{ grade: UpdateGradeDto }>()
);

export const loadLocation = createAction(
  '[API] Load location',
  props<{ locationId: number }>()
);

export const loadLocationSuccess = createAction(
  '[API] Load location success',
  props<{ location: Location }>()
);

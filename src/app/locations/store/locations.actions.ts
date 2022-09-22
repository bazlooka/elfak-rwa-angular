import { createAction, props } from '@ngrx/store';
import { HomepageDto } from '../models/homepage.dto';

export const loadHomepage = createAction('[API] Load hompage locations');

export const loadHomepageSuccess = createAction(
  '[API] Load homepage locations success',
  props<{ homepage: HomepageDto }>()
);

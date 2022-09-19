import { createAction, props } from '@ngrx/store';
import { Homepage } from '../models/homepage.interface';

export const loadHomepage = createAction('[API] Load hompage locations');

export const loadHomepageSuccess = createAction(
  '[API] Load homepage locations success',
  props<{ homepage: Homepage }>()
);

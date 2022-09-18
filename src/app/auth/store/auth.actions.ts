import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.interface';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ user: User }>()
);

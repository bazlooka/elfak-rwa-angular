import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.interface';
import { RegisterUserDto } from '../models/user.register.dto';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login success',
  props<{ user: User }>()
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout success');

export const register = createAction(
  '[Auth] Register',
  props<{ newUser: RegisterUserDto }>()
);

export const deleteAccount = createAction('[Auth] Delete account');

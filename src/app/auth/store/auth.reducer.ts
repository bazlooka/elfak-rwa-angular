import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

import { User } from '../models/user.interface';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => {
    return { user, isAuthenticated: user !== null };
  })
);

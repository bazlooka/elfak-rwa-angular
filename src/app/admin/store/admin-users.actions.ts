import { createAction, props } from '@ngrx/store';
import { Role } from 'src/app/auth/enums/role.enum';
import { AdminUserDto } from '../models/admin-user.dto';

export const loadAdminUsers = createAction(
  '[Admin] Load admin users',
  props<{ query?: string }>()
);

export const loadAdminUsersSuccess = createAction(
  '[Admin] Load admin users success',
  props<{ users: AdminUserDto[] }>()
);

export const setUserBanned = createAction(
  '[Admin] Ban user',
  props<{ userId: number; banned: boolean }>()
);

export const setUserBannedSuccess = createAction(
  '[Admin] Ban user success',
  props<{ userId: number; isBanned: boolean }>()
);

export const setUserRoles = createAction(
  '[Admin] Set user roles',
  props<{ userId: number; roles: Role[] }>()
);

export const setUserRolesSuccess = createAction(
  '[Admin] Set user roles success',
  props<{ userId: number; roles: Role[] }>()
);

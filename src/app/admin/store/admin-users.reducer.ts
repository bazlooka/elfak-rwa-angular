import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { AdminUser } from '../models/admin-user.interface';
import * as AdminUsersActions from './admin-users.actions';

export interface AdminUsersState extends EntityState<AdminUser> {}

const adapter = createEntityAdapter<AdminUser>();

export const initialState: AdminUsersState = adapter.getInitialState({});

export const adminUsersReducer = createReducer(
  initialState,
  on(AdminUsersActions.loadAdminUsersSuccess, (state, { users }) => {
    return adapter.setAll(users, state);
  }),
  on(AdminUsersActions.setUserBannedSuccess, (state, { userId, isBanned }) =>
    adapter.updateOne({ id: userId, changes: { isBanned } }, state)
  ),
  on(AdminUsersActions.setUserRolesSuccess, (state, { userId, roles }) =>
    adapter.updateOne({ id: userId, changes: { roles } }, state)
  )
);

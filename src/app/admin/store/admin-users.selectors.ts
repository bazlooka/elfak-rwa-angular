import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AdminUser } from '../models/admin-user.interface';

export const selectAdminUsersFeature = createSelector(
  (state: AppState) => state.adminUsers,
  (adminUsers) => adminUsers
);

export const selectAdminUsers = createSelector(
  selectAdminUsersFeature,
  (users) =>
    users.ids
      .map((id) => users.entities[id])
      .filter((user) => user != null)
      .map((user) => <AdminUser>user)
);

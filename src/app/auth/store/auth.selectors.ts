import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Role } from '../enums/role.enum';

export const selectAuthFeature = createSelector(
  (state: AppState) => state.auth,
  (auth) => auth
);

export const selectUser = createSelector(
  selectAuthFeature,
  (auth) => auth.user
);

export const selectUserRoles = createSelector(
  selectUser,
  (user) => user?.roles
);

export const selectHasRole = (targetRole: Role) => {
  return createSelector(
    selectUserRoles,
    (roles) => !!roles && roles.findIndex((role) => role === targetRole) !== -1
  );
};

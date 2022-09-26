import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { AdminUsersService } from '../services/admin-users.service';
import * as AdminUsersActions from './admin-users.actions';

@Injectable()
export class AdminUsersEffects {
  fetchAdminUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminUsersActions.loadAdminUsers),
      mergeMap(({ query }) => {
        return this.adminUsersService.fetchUsers(query).pipe(
          map((users) => {
            return AdminUsersActions.loadAdminUsersSuccess({
              users,
            });
          })
        );
      })
    );
  });

  setUserBanned$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminUsersActions.setUserBanned),
      mergeMap(({ userId, banned }) => {
        return this.adminUsersService.setUserBanned(userId, banned).pipe(
          map(({ id, isBanned }) => {
            this.snackbar.open(
              `User successfully ${isBanned ? 'banned' : 'unbanned'}`
            );
            return AdminUsersActions.setUserBannedSuccess({
              userId: id,
              isBanned,
            });
          })
        );
      })
    );
  });

  setUserRoles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminUsersActions.setUserRoles),
      mergeMap(({ userId, roles }) => {
        return this.adminUsersService.setUserRoles(userId, roles).pipe(
          map(({ id, roles }) => {
            this.snackbar.open(`Roles successfully updated`);
            return AdminUsersActions.setUserRolesSuccess({
              userId: id,
              roles,
            });
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private adminUsersService: AdminUsersService,
    private snackbar: MatSnackBar
  ) {}
}

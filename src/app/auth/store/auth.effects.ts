import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ username, password: passowrd }) => {
        return this.authService.login(username, passowrd).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError(() => of({ type: 'login error' }))
        );
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        this.authService.logout();
        return AuthActions.logoutSuccess();
      })
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      mergeMap(({ newUser }) => {
        return this.authService.register(newUser).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError(() => of({ type: 'login error' }))
        );
      })
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}

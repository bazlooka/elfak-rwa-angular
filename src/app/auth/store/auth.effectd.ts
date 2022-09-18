import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

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
}

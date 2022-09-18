import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import { ActivatedRoute, Router } from '@angular/router';

export const RETURN_QUERY = 'returnUrl';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    const savedUserString = localStorage.getItem('user');

    if (savedUserString) {
      const savedUser = JSON.parse(savedUserString) as User;
      this.store.dispatch(AuthActions.loginSuccess({ user: savedUser }));
    }
  }

  public login(username: string, password: string) {
    return this.httpClient
      .post<User>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          const returnTo = this.route.snapshot.queryParamMap.get(RETURN_QUERY);
          this.router.navigateByUrl(returnTo || '/locations');
          return user;
        })
      );
  }

  public logout() {
    localStorage.removeItem('user');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterUserDto } from '../models/user.register.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

export const RETURN_QUERY = 'returnUrl';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly snackbar: MatSnackBar
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
        tap((user) => {
          this.saveUser(user);
          this.snackbar.open('Login successful');
          const returnTo = this.route.snapshot.queryParamMap.get(RETURN_QUERY);
          this.router.navigateByUrl(returnTo || '/locations');
        })
      );
  }

  public logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/locations');
  }

  public register(newUser: RegisterUserDto) {
    return this.httpClient
      .post<User>(`${environment.apiUrl}/users/register`, newUser)
      .pipe(
        tap((user) => {
          this.saveUser(user);
          this.snackbar.open('Registration successful');
          this.router.navigateByUrl('/locations');
        })
      );
  }

  private saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public deleteAccount() {
    return this.httpClient.delete<User>(
      `${environment.apiUrl}/users/my-accont`
    );
  }
}

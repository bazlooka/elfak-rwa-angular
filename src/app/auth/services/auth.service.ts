import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;

  constructor(private httpClient: HttpClient) {
    const savedUser = localStorage.getItem('user');

    this.userSubject = new BehaviorSubject(savedUser && JSON.parse(savedUser));
    this.user$ = this.userSubject.asObservable();
  }

  public get currentUser(): User | null {
    return this.userSubject.value;
  }

  public login(username: string, password: string) {
    return this.httpClient
      .post<User>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  public logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}

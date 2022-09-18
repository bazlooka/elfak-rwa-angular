import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { User } from '../models/user.interface';
import { selectUser } from '../store/auth.selectors';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  currentUser: User | null = null;

  constructor(private readonly store: Store<AppState>) {
    store.select(selectUser).subscribe((user) => {
      this.currentUser = user;
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.currentUser && this.currentUser.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.currentUser.accessToken}`,
        },
      });
    }

    return next.handle(request);
  }
}

import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.interface';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/auth/store/auth.selectors';
import { AppState } from 'src/app/app.state';
import * as AuthActions from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<User | null> = of(null);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser);
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  deleteAccount(): void {
    this.store.dispatch(AuthActions.deleteAccount());
  }
}

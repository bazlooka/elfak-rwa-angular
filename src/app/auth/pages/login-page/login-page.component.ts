import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router,
    private readonly snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  login(username: string, password: string): void {
    if (!username || !password) {
      this.snackbar.open('Please fill in all fields');
      return;
    }
    this.store.dispatch(login({ username, password }));
  }
}

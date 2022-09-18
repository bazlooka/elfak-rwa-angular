import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth.actions';
import { selectUser } from '../../store/auth.selectors';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(username: string, password: string): void {
    if (!username || !password) {
      return;
    }
    this.store.dispatch(login({ username, password }));
  }
}

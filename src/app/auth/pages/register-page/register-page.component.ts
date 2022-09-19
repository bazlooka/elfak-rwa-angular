import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth.actions';
import { RegisterUserDto } from '../../models/user.register.dto';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private readonly toastr: ToastrService,
    private readonly store: Store<AppState>
  ) {}

  password: any = null;

  ngOnInit(): void {}

  register(
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    passwordRepeated: string
  ) {
    if (
      !username ||
      !firstName ||
      !lastName ||
      !password ||
      !passwordRepeated
    ) {
      this.toastr.error('Please fill in all fields');
      return;
    }

    if (password !== passwordRepeated) {
      this.toastr.error('Passwords do not match');
      return;
    }

    const newUser: RegisterUserDto = {
      username,
      firstName,
      lastName,
      password,
    };

    this.store.dispatch(AuthActions.register({ newUser }));
  }
}

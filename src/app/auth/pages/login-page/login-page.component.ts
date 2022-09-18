import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe({
      next: (user) => {
        console.log(user);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

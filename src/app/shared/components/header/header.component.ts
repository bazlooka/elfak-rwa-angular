import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/models/user.interface';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/auth/store/auth.selectors';
import { Observable } from 'rxjs';
import { Role } from 'src/app/auth/enums/role.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null>;
  showDashboard: boolean = false;

  constructor(private readonly store: Store<AppState>) {
    this.user$ = store.select(selectUser);
    this.user$.subscribe((user) => {
      this.showDashboard =
        !!user && user.roles.findIndex((role) => role === Role.Admin) !== -1;
    });
  }

  ngOnInit(): void {}
}

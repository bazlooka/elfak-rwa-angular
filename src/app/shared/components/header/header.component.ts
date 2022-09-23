import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/models/user.interface';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { selectHasRole, selectUser } from 'src/app/auth/store/auth.selectors';
import { Observable, of } from 'rxjs';
import { Role } from 'src/app/auth/enums/role.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null> = of(null);
  showDashboard$: Observable<boolean> = of(false);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser);
    this.showDashboard$ = this.store.select(selectHasRole(Role.Admin));
  }
}

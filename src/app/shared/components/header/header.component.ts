import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/models/user.interface';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/auth/store/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private readonly store: Store<AppState>) {
    this.user$ = store.select(selectUser);
  }

  ngOnInit(): void {}
}

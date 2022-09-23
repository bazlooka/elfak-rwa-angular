import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as LocationsActions from '../../store/locations.actions';
import { Observable, of } from 'rxjs';
import { selectHasRole } from 'src/app/auth/store/auth.selectors';
import { Role } from 'src/app/auth/enums/role.enum';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  showNewLocationBtn$: Observable<boolean> = of(false);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(LocationsActions.loadHomepage());
    this.showNewLocationBtn$ = this.store.select(selectHasRole(Role.Editor));
  }
}

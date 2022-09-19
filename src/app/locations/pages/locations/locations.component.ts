import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as LocationsActions from '../../store/locations.actions';
import { selectHomepage } from '../../store/locations.selectors';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(LocationsActions.loadHomepage());

    this.store.select(selectHomepage).subscribe((homepage) => {
      console.log(homepage);
    });
  }
}

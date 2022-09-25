import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AdminLocationType } from '../../models/admin-location-type.interface.dto';
import { Store } from '@ngrx/store';
import { loadAdminLocationTypes } from '../../store/admin-location-types.actions';
import { selectAdminLocationTypes } from '../../store/admin-location-types.selectors';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { CreateLocationTypeDialogComponent } from '../../components/create-location-type-dialog/create-location-type-dialog.component';

@Component({
  selector: 'app-location-type-admin-page',
  templateUrl: './location-type-admin-page.component.html',
  styleUrls: ['./location-type-admin-page.component.scss'],
})
export class LocationTypeAdminPageComponent implements OnInit {
  displayedColumns = ['markerPath', 'name', 'locationCount'];

  locationTypes$: Observable<AdminLocationType[]> | null = null;

  constructor(
    private readonly store: Store<AppState>,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadAdminLocationTypes());
    this.locationTypes$ = this.store.select(selectAdminLocationTypes);
  }

  getMarkerUrl(relativePath: string) {
    return environment.mediaUrl + relativePath;
  }

  openCreateLocationDialg() {
    this.dialog.open(CreateLocationTypeDialogComponent, {
      width: '300px',
    });
  }
}

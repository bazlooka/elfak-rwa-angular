import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { AdminLocationType } from '../../models/admin-location-type.interface.dto';
import { Store } from '@ngrx/store';
import { loadAdminLocationTypes } from '../../store/admin-location-types.actions';
import { selectAdminLocationTypes } from '../../store/admin-location-types.selectors';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { LocationTypeDialogComponent } from '../../components/location-type-dialog/location-type-dialog.component';
import * as AdminLocationTypesActions from '../../store/admin-location-types.actions';

@Component({
  selector: 'app-location-type-admin-page',
  templateUrl: './location-type-admin-page.component.html',
  styleUrls: ['./location-type-admin-page.component.scss'],
})
export class LocationTypeAdminPageComponent implements OnInit {
  displayedColumns = ['markerPath', 'name', 'locationCount', 'edit'];

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
    const dialogClosed$ = this.dialog
      .open(LocationTypeDialogComponent, {
        width: '300px',
      })
      .afterClosed();

    dialogClosed$.subscribe((resultData) => {
      if (resultData) {
        this.store.dispatch(
          AdminLocationTypesActions.createLocationType({
            locationData: resultData.formData,
          })
        );
      }
    });
  }

  openEditLocTypeDialog(locationType: AdminLocationType) {
    const dialogClosed$ = this.dialog
      .open(LocationTypeDialogComponent, {
        width: '300px',
        data: { locationType },
      })
      .afterClosed();

    dialogClosed$.subscribe((resultData) => {
      if (resultData) {
        this.store.dispatch(
          AdminLocationTypesActions.editLocationType({
            id: resultData.id,
            locationData: resultData.formData,
          })
        );
      }
    });
  }
}

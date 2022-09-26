import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { LocationsService } from '../locations.service';
import * as LocationActions from './locations.actions';

@Injectable()
export class LocationEffects {
  getHomepage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LocationActions.loadHomepage),
      mergeMap(() => {
        return this.locationsService.getHomepage().pipe(
          map((homepage) => LocationActions.loadHomepageSuccess({ homepage })),
          catchError(() => of({ type: 'homepage loading error' }))
        );
      })
    );
  });

  createLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LocationActions.createNewLocation),
      mergeMap(({ locationData }) => {
        return this.locationsService.createLocation(locationData).pipe(
          map((location) => {
            this.snackbar.open(`${location.name} successfully created!`);
            this.router.navigateByUrl('/locations');
            return LocationActions.createNewLocationSuccess({ location });
          }),
          catchError(() => of({ type: '' }))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private locationsService: LocationsService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}
}

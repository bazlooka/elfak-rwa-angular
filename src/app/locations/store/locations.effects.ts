import { Injectable } from '@angular/core';
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

  constructor(
    private actions$: Actions,
    private locationsService: LocationsService
  ) {}
}

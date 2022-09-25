import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { AdminLocationTypesService } from '../services/admin-location-types.service';
import * as AdminLocationTypesActions from './admin-location-types.actions';

@Injectable()
export class AdminLocationTypesEffects {
  fetchLocationTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminLocationTypesActions.loadAdminLocationTypes),
      mergeMap(() => {
        return this.adminLocationTypesService.fetchAllLocationTypes().pipe(
          map((locationTypes) =>
            AdminLocationTypesActions.loadAdminLocationTypesSuccess({
              locationTypes,
            })
          )
        );
      })
    );
  });

  createLocationType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminLocationTypesActions.createLocationType),
      mergeMap(({ locationData }) => {
        return this.adminLocationTypesService
          .createLocationType(locationData)
          .pipe(
            map((locationType) =>
              AdminLocationTypesActions.createLocationTypeSuccess({
                locationType,
              })
            )
          );
      })
    );
  });

  editLocationType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminLocationTypesActions.editLocationType),
      mergeMap(({ id, locationData }) => {
        return this.adminLocationTypesService
          .editLocationType(id, locationData)
          .pipe(
            map((locationType) =>
              AdminLocationTypesActions.editLocationTypeSuccess({
                locationType,
              })
            )
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private adminLocationTypesService: AdminLocationTypesService
  ) {}
}

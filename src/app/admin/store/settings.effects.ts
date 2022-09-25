import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { AdminLocationTypesService } from '../services/admin-location-types.service';
import { SettingsService } from '../services/settings.service';
import * as SettingsActions from './settings.actions';

@Injectable()
export class SettingsEffects {
  getSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SettingsActions.loadSettings),
      mergeMap(() => {
        return this.settingsService
          .getAll()
          .pipe(
            map((settingsDto) =>
              SettingsActions.loadSettingsSuccess({ settingsDto })
            )
          );
      })
    );
  });

  updateSetting$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SettingsActions.updateSetting),
      mergeMap(({ key, value }) => {
        return this.settingsService
          .updateSetting(key, value)
          .pipe(
            map((settingDto) =>
              SettingsActions.updateSettingSuccess({ settingDto })
            )
          );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) {}
}

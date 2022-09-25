import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Setting } from '../models/setting.interface';

export const selectSettingsFeature = createSelector(
  (state: AppState) => state.settings,
  (settings) => settings
);

export const selectSettings = createSelector(
  selectSettingsFeature,
  (settings) =>
    settings.ids
      .map((id) => settings.entities[id])
      .filter((setting) => setting != null)
      .map((setting) => <Setting>setting)
);

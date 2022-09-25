import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Setting } from '../models/setting.interface';
import * as SettingsActions from './settings.actions';

export interface SettingsState extends EntityState<Setting> {}

const adapter = createEntityAdapter<Setting>({
  selectId: (setting) => setting.key,
});

export const initialState: SettingsState = adapter.getInitialState({});

export const settingsReducer = createReducer(
  initialState,
  on(SettingsActions.loadSettingsSuccess, (state, { settingsDto }) =>
    adapter.setAll(
      settingsDto.map((settingDto) => {
        return { ...settingDto, editMode: false };
      }),
      state
    )
  ),
  on(SettingsActions.setEditMode, (state, { key, editMode }) => {
    return adapter.updateOne(
      {
        id: key,
        changes: {
          editMode,
        },
      },
      state
    );
  }),
  on(SettingsActions.updateSettingSuccess, (state, { settingDto }) => {
    return adapter.updateOne(
      {
        id: settingDto.key,
        changes: {
          value: settingDto.value,
          editMode: false,
        },
      },
      state
    );
  })
);

import { createAction, props } from '@ngrx/store';
import { SettingDto } from '../models/setting.dto';

export const loadSettings = createAction('[Admin] Load settings');

export const loadSettingsSuccess = createAction(
  '[Admin] Load settings success',
  props<{ settingsDto: SettingDto[] }>()
);

export const updateSetting = createAction(
  '[Admin] Update setting',
  props<{ key: string; value: string }>()
);

export const updateSettingSuccess = createAction(
  '[Admin] Update setting success',
  props<{ settingDto: SettingDto }>()
);

export const setEditMode = createAction(
  '[Admin] Set setting edit mode',
  props<{ key: string; editMode: boolean }>()
);

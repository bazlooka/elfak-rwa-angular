import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as SettingsActions from '../../store/settings.actions';
import { Observable } from 'rxjs';
import { Setting } from '../../models/setting.interface';
import { selectSettings } from '../../store/settings.selectors';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  settings$: Observable<Setting[]> | null = null;

  displayedColumns = ['name', 'value'];

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.settings$ = this.store.select(selectSettings);
    this.store.dispatch(SettingsActions.loadSettings());
  }

  setEditMode(key: string) {
    this.store.dispatch(SettingsActions.setEditMode({ key, editMode: true }));
  }

  updateSetting(key: string, value: string) {
    this.store.dispatch(SettingsActions.updateSetting({ key, value }));
  }
}

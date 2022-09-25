import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SettingDto } from '../models/setting.dto';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly snackbar: MatSnackBar
  ) {}

  getAll() {
    return this.httpClient.get<SettingDto[]>(`${environment.apiUrl}/settings`);
  }

  updateSetting(key: string, value: string) {
    return this.httpClient
      .put<SettingDto>(`${environment.apiUrl}/settings/${key}`, {
        value,
      })
      .pipe(
        tap(() => {
          this.snackbar.open('Setting updated successfully');
        })
      );
  }
}

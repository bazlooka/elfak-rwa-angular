import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminLocationType } from '../models/admin-location-type.interface.dto';

@Injectable({
  providedIn: 'root',
})
export class AdminLocationTypesService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly snackbar: MatSnackBar
  ) {}

  public fetchAllLocationTypes(): Observable<AdminLocationType[]> {
    return this.httpClient.get<AdminLocationType[]>(
      `${environment.apiUrl}/locations/types`
    );
  }

  public createLocationType(locationData: FormData) {
    return this.httpClient
      .post<AdminLocationType>(
        `${environment.apiUrl}/locations/types`,
        locationData
      )
      .pipe(
        tap((locationType) => {
          this.snackbar.open(`${locationType.name} created successfully.`);
        })
      );
  }

  public editLocationType(id: number, locationData: FormData) {
    return this.httpClient
      .put<AdminLocationType>(
        `${environment.apiUrl}/locations/types/${id}`,
        locationData
      )
      .pipe(
        tap((locationType) => {
          this.snackbar.open(`${locationType.name} edited successfully.`);
        })
      );
  }
}

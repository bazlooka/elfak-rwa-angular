import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { environment } from 'src/environments/environment';
import { AdminLocationType } from '../models/admin-location-type.interface.dto';
import { CreateLocationTypeDto } from '../models/location-type.create.dto';

@Injectable({
  providedIn: 'root',
})
export class AdminLocationTypesService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {}

  public fetchAllLocationTypes(): Observable<AdminLocationType[]> {
    return this.httpClient.get<AdminLocationType[]>(
      `${environment.apiUrl}/locations/types`
    );
  }

  public createLocationType(locationData: FormData) {
    return this.httpClient.post<AdminLocationType>(
      `${environment.apiUrl}/locations/types`,
      locationData
    );
  }
}

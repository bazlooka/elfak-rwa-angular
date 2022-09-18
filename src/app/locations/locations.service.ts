import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Location[]>(environment.apiUrl + '/locations');
  }

  getTrending() {
    return this.httpClient.get<Location[]>(
      environment.apiUrl + '/locations/trending'
    );
  }
}

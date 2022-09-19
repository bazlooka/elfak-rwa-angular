import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Homepage } from './models/homepage.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private readonly httpClient: HttpClient) {}

  getHomepage() {
    return this.httpClient.get<Homepage>(
      environment.apiUrl + '/locations/homepage'
    );
  }

  getAll() {
    return this.httpClient.get<Location[]>(environment.apiUrl + '/locations');
  }

  getTrending() {
    return this.httpClient.get<Location[]>(
      environment.apiUrl + '/locations/trending'
    );
  }
}

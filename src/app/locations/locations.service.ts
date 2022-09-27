import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppState } from '../app.state';
import { HomepageDto } from './models/homepage.dto';
import { Location } from './models/location.interface';
import { Store } from '@ngrx/store';
import { selectUser } from '../auth/store/auth.selectors';
import { CreateGradeDto } from './models/grade.create.dto';
import { UpdateGradeDto } from './models/grade.update.dto';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  userId: number | null = null;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store<AppState>
  ) {
    store.select(selectUser).subscribe((user) => {
      if (user) {
        this.userId = user.id;
      } else {
        this.userId = null;
      }
    });
  }

  getHomepage() {
    let userIdQuery = '';
    if (this.userId) {
      userIdQuery = `?userId=${this.userId}`;
    }

    return this.httpClient.get<HomepageDto>(
      environment.apiUrl + '/locations/homepage' + userIdQuery
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

  createLocation(locationData: FormData) {
    return this.httpClient.post<Location>(
      environment.apiUrl + '/locations',
      locationData
    );
  }

  gradeLocation(grade: CreateGradeDto) {
    return this.httpClient.put<UpdateGradeDto>(
      environment.apiUrl + '/grades',
      grade
    );
  }

  loadLocation(locationId: number) {
    return this.httpClient.get<Location>(
      environment.apiUrl + '/locations/' + locationId
    );
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { selectTrendingLocations } from '../../store/locations.selectors';
import { Location } from '../../models/location.interface';

@Component({
  selector: 'app-trending-locations',
  templateUrl: './trending-locations.component.html',
  styleUrls: ['./trending-locations.component.scss'],
})
export class TrendingLocationsComponent implements OnInit {
  trendingLocations$: Observable<Location[]> | null = null;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.trendingLocations$ = this.store.select(selectTrendingLocations);
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { TrendingLocationDto } from '../../models/trending-location.dto';
import { selectTrendingLocations } from '../../store/trending-locations.selectors';

@Component({
  selector: 'app-trending-locations',
  templateUrl: './trending-locations.component.html',
  styleUrls: ['./trending-locations.component.scss'],
})
export class TrendingLocationsComponent implements OnInit {
  trendingLocations$: Observable<TrendingLocationDto[]> | null = null;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.trendingLocations$ = this.store.select(selectTrendingLocations);
  }
}

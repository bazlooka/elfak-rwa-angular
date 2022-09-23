import { TrendingLocation } from '../models/trending-location.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as LocationsActions from './locations.actions';

export interface TrendingLocationsState extends EntityState<TrendingLocation> {}

const adapter = createEntityAdapter<TrendingLocation>();

export const initialState: TrendingLocationsState = adapter.getInitialState({});

export const trendingLocationsReducer = createReducer(
  initialState,
  on(LocationsActions.loadHomepageSuccess, (state, { homepage }) =>
    adapter.setAll(homepage.trendingLocations, state)
  )
);

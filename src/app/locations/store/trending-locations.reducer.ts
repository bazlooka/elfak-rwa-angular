import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as LocationsActions from './locations.actions';
import { TrendingLocation } from '../models/trending-location.interface';

export interface TrendingLocationsState extends EntityState<TrendingLocation> {}

const adapter = createEntityAdapter<TrendingLocation>();

export const initialState: TrendingLocationsState = adapter.getInitialState({});

export const trendingLocationsReducer = createReducer(
  initialState,
  on(LocationsActions.loadHomepageSuccess, (state, { homepage }) =>
    adapter.setAll(homepage.trendingLocations, state)
  ),
  on(LocationsActions.gradeLocationSuccess, (state, { grade }) => {
    const { gradeCount, averageGrade, locationId, savedGrade } = grade;
    return adapter.updateOne(
      {
        id: locationId,
        changes: {
          gradecount: gradeCount,
          averageGrade,
          myGrade: savedGrade,
        },
      },
      state
    );
  })
);

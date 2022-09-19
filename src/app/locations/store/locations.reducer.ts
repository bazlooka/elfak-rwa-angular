import { createReducer, on } from '@ngrx/store';
import { Homepage } from '../models/homepage.interface';
import * as LocationsActions from './locations.actions';

export interface LocationsState {
  homepage: Homepage | null;
}

export const initialState: LocationsState = {
  homepage: null,
};

export const locationsReducer = createReducer(
  initialState,
  on(LocationsActions.loadHomepageSuccess, (state, { homepage }) => {
    return { ...state, homepage };
  })
);

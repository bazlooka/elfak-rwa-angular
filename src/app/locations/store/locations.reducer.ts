import { createReducer, on } from '@ngrx/store';
import { Grade } from '../models/grade.interface';
import { Location } from '../models/location.interface';
import * as LocationsActions from './locations.actions';

export interface LocationPageState {
  openedLocation: Location | null;
}

export const initialState: LocationPageState = {
  openedLocation: null,
};

export const locationPageReducer = createReducer(
  initialState,
  on(LocationsActions.loadLocationSuccess, (state, { location }) => {
    return { ...state, openedLocation: location };
  })
);

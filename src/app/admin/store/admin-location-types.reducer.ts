import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { AdminLocationType } from '../models/admin-location-type.interface.dto';
import * as AdminLocationTypesActions from './admin-location-types.actions';

export interface AdminLocationTypesState
  extends EntityState<AdminLocationType> {
  selectedId: number | null;
}

const adapter = createEntityAdapter<AdminLocationType>();

export const initialState: AdminLocationTypesState = adapter.getInitialState({
  selectedId: null,
});

export const adminLocationTypesReducer = createReducer(
  initialState,
  on(
    AdminLocationTypesActions.loadAdminLocationTypesSuccess,
    (state, { locationTypes }) => adapter.setAll(locationTypes, state)
  )
);

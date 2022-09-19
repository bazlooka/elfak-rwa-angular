import { AuthState } from './auth/store/auth.reducer';
import { LocationsState } from './locations/store/locations.reducer';

export interface AppState {
  auth: AuthState;
  locations: LocationsState;
}

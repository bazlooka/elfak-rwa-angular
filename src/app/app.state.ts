import { AdminLocationTypesState } from './admin/store/admin-location-types.reducer';
import { AdminUsersState } from './admin/store/admin-users.reducer';
import { SettingsState } from './admin/store/settings.reducer';
import { AuthState } from './auth/store/auth.reducer';
import { LocationMapState } from './locations/store/location-map.reducer';
import { TrendingLocationsState } from './locations/store/trending-locations.reducer';

export interface AppState {
  auth: AuthState;
  locationMap: LocationMapState;
  trendingLocations: TrendingLocationsState;
  adminLocationTypes: AdminLocationTypesState;
  adminUsers: AdminUsersState;
  settings: SettingsState;
}

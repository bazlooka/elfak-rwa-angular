import { LocationPin } from './location-pin.interface';
import { Map } from './map.interface';

export interface Homepage {
  map: Map;
  locationPins: LocationPin[];
  trendingLocations: Location[];
}

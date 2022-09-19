import { LocationPin } from './location-pin.interface';

export interface Homepage {
  map: {
    centerLatitude: number;
    centerLongitude: number;
    zoom: number;
  };
  locationPins: LocationPin[];
  trendingLocations: Location[];
}

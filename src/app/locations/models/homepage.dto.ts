import { LatLng } from 'leaflet';
import { LocationPin } from './location-pin.interface';
import { Location } from './location.interface';

export interface HomepageDto {
  map: {
    center: LatLng;
    zoom: number;
  };
  locationPins: LocationPin[];
  trendingLocations: Location[];
}

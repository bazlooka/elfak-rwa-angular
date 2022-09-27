import { LatLng } from 'leaflet';
import { LocationPin } from './location-pin.interface';
import { TrendingLocationDto } from './trending-location.dto';

export interface HomepageDto {
  map: {
    center: LatLng;
    zoom: number;
  };
  locationPins: LocationPin[];
  trendingLocations: TrendingLocationDto[];
}

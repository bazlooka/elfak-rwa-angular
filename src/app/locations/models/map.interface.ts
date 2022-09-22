import { LatLng } from 'leaflet';

export interface Map {
  isShown: boolean;
  center: LatLng;
  zoom: number;
}

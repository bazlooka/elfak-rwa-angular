export interface CreateLocationDto {
  name: string;
  description: string;
  address: string;
  website: string;
  latitude: number;
  longitude: number;
  typeId: number;
}

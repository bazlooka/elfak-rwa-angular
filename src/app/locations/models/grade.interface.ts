import { User } from 'src/app/auth/models/user.interface';

export interface Grade {
  id: number;
  rating: number;
  comment: string;
  locationId: number;
  gradedById: number;
  gradedBy?: User;
}

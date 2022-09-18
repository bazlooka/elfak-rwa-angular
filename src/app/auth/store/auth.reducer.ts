import { User } from '../models/user.interface';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

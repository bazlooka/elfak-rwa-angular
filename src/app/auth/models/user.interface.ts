import { Role } from '../enums/role.enum';

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  roles: Role[];
  accessToken: string;
}

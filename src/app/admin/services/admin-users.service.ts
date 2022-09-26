import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from 'src/app/auth/enums/role.enum';
import { environment } from 'src/environments/environment';
import { AdminUserDto } from '../models/admin-user.dto';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchUsers(query?: string) {
    const formattedQuery = query ? `?q=${query}` : '';

    return this.httpClient.get<AdminUserDto[]>(
      `${environment.apiUrl}/users${formattedQuery}`
    );
  }

  setUserBanned(userId: number, isBanned: boolean) {
    return this.httpClient.patch<{ id: number; isBanned: boolean }>(
      `${environment.apiUrl}/users/${userId}`,
      { isBanned }
    );
  }

  setUserRoles(userId: number, roles: Role[]) {
    return this.httpClient.patch<{ id: number; roles: Role[] }>(
      `${environment.apiUrl}/users/${userId}`,
      { roles }
    );
  }
}

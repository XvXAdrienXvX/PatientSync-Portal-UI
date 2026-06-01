import {inject, Injectable} from '@angular/core';
import { ApiClient } from '../../../shared/services/api-client.service';
import { Users } from '../types/users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiClient =  inject(ApiClient)

  getUsers = () => this.apiClient.get<Users[]>('/users');
}
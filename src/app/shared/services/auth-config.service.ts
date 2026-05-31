import { Injectable } from '@angular/core';
import appConfig from '../../app.config.json';

export type LoginMode = 'mock' | 'auth';

@Injectable({ providedIn: 'root' })
export class AuthConfigService {
  readonly loginMode: LoginMode = appConfig.loginMode as LoginMode;
}

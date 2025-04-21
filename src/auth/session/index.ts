import Config from 'react-native-config';
import { interfaces } from 'inversify';

import { AppModule } from '@/di/model';

import { LocalAuthenticationProvider } from './local-auth-provider';
import { MMKVAuthenticationStorage } from './mmkv-auth-storage';
import { SessionService } from './session.service';

export interface ISession {
  userId: string;
  secret: string;
}

export interface ISessionInitializer {
  initialize(session: ISession): Promise<void>;
  destroy(): Promise<void>;
}

export interface ISessionService {
  login(email: string, password: string): Promise<ISession>;
  register(email: string, password: string): Promise<ISession>;
  refresh(): Promise<ISession>;
  restore(): Promise<ISession>;
  logout(): Promise<void>;
}

export const SessionServiceFactory = (context: interfaces.Context): ISessionService => {
  const userInitializer: ISessionInitializer = context.container.get(AppModule.USER);
  const pushServiceInitializer: ISessionInitializer = context.container.get(AppModule.PUSH_NOTIFICATION);

  return new SessionService({
    tokenRefreshThresholdMinutes: Number(Config.RNAPP_AUTH_TOKEN_REFRESH_THRESHOLD_MINUTES) || 0,
    authenticationProvider: new LocalAuthenticationProvider(),
    authenticationStorage: new MMKVAuthenticationStorage({
      encryptionKey: Config.RNAPP_STORAGE_ENCRYPTION_KEY || '',
    }),
    initializers: [userInitializer, pushServiceInitializer],
    logger: context.container.get(AppModule.LOG),
  });
};

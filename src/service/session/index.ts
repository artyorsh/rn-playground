import Config from 'react-native-config';
import { ContainerModule } from 'inversify';

import { LogServiceId } from '@service/log';
import { ILogService } from '@service/log/model';
import { PushNotificationServiceId } from '@service/push-notification';
import { UserServiceId } from '@service/user';

import { LocalAuthenticationProvider } from './local-auth-provider';
import { MMKVAuthenticationStorage } from './mmkv-auth-storage';
import { ISessionInitializer, ISessionService } from './model';
import { AnyAuthenticationToken, IAuthenticationProvider, IAuthenticationStorage, SessionService } from './session.service';

export const SessionServiceId: symbol = Symbol.for('SessionService');

export const SessionModule = new ContainerModule(bind => {
  bind<ISessionService>(SessionServiceId).toDynamicValue(context => {
    const authenticationProvider: IAuthenticationProvider<AnyAuthenticationToken> = new LocalAuthenticationProvider();
    const authenticationStorage: IAuthenticationStorage<AnyAuthenticationToken> = new MMKVAuthenticationStorage({
      encryptionKey: Config.RNAPP_STORAGE_ENCRYPTION_KEY || '',
    });

    const userInitializer: ISessionInitializer = context.container.get(UserServiceId);
    const pushServiceInitializer: ISessionInitializer = context.container.get(PushNotificationServiceId);

    const logService: ILogService = context.container.get(LogServiceId);

    return new SessionService({
      tokenRefreshThresholdMinutes: Number(Config.RNAPP_AUTH_TOKEN_REFRESH_THRESHOLD_MINUTES) || 0,
      authenticationProvider,
      authenticationStorage,
      initializers: [userInitializer, pushServiceInitializer],
      logger: logService,
    });
  }).inSingletonScope();
});

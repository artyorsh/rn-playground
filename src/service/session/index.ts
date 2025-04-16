import Config from 'react-native-config';
import { ContainerModule } from 'inversify';

import { ILogService } from '@service/log/model';

import { LocalAuthenticationProvider } from './local-auth-provider';
import { MMKVAuthenticationStorage } from './mmkv-auth-storage';
import { ISessionInitializer, ISessionService } from './model';
import { AnyAuthenticationToken, IAuthenticationProvider, IAuthenticationStorage, SessionService } from './session.service';

export const SessionModule = new ContainerModule(bind => {
  bind<ISessionService>('session').toDynamicValue(context => {
    const authenticationProvider: IAuthenticationProvider<AnyAuthenticationToken> = new LocalAuthenticationProvider();
    const authenticationStorage: IAuthenticationStorage<AnyAuthenticationToken> = new MMKVAuthenticationStorage({
      encryptionKey: Config.RNAPP_STORAGE_ENCRYPTION_KEY || '',
    });

    const userInitializer: ISessionInitializer = context.container.get('user');
    const pushServiceInitializer: ISessionInitializer = context.container.get('push_notification');

    const logService: ILogService = context.container.get('log');

    return new SessionService({
      tokenRefreshThresholdMinutes: Number(Config.RNAPP_AUTH_TOKEN_REFRESH_THRESHOLD_MINUTES) || 0,
      authenticationProvider,
      authenticationStorage,
      initializers: [userInitializer, pushServiceInitializer],
      logger: logService,
    });
  }).inSingletonScope();
});

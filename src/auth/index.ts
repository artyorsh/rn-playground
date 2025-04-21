import React from 'react';
import Config from 'react-native-config';
import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';
import { ISessionInitializer, ISessionService } from '@/auth/session/model';

import { ILoginVM, Login } from './login/login.component';
import { LoginVM } from './login/login.vm';
import { IRegisterVM, Register } from './register/register.component';
import { RegisterVM } from './register/register.vm';
import { LocalAuthenticationProvider } from './session/local-auth-provider';
import { MMKVAuthenticationStorage } from './session/mmkv-auth-storage';
import { AnyAuthenticationProvider, AnyAuthenticationStorage, ISessionServiceOptions, SessionService } from './session/session.service';
import { IWelcomeVM, Welcome } from './welcome/welcome.component';
import { WelcomeVM } from './welcome/welcome.vm';

export type IAuthRoute =
  | '/welcome'
  | '/login'
  | '/register';

export const AuthModule = new ContainerModule(bind => {
  bind<ISessionService>(AppModule.SESSION)
    .toDynamicValue(context => new SessionService(createSessionServiceOptions(context)))
    .inSingletonScope();

  bind<interfaces.Factory<React.FC>>(AppModule.WELCOME_SCREEN)
    .toFactory(context => () => React.createElement(Welcome, { vm: createWelcomeVM(context) }));

  bind<interfaces.Factory<React.FC>>(AppModule.LOGIN_SCREEN)
    .toFactory(context => () => React.createElement(Login, { vm: createLoginVM(context) }));

  bind<interfaces.Factory<React.FC>>(AppModule.REGISTER_SCREEN)
    .toFactory(context => () => React.createElement(Register, { vm: createRegisterVM(context) }));
});

const createSessionServiceOptions = (context: interfaces.Context): ISessionServiceOptions<AnyAuthenticationProvider, AnyAuthenticationStorage> => {
  const userInitializer: ISessionInitializer = context.container.get(AppModule.USER);
  const pushServiceInitializer: ISessionInitializer = context.container.get(AppModule.PUSH_NOTIFICATION);

  return {
    tokenRefreshThresholdMinutes: Number(Config.RNAPP_AUTH_TOKEN_REFRESH_THRESHOLD_MINUTES) || 0,
    authenticationProvider: new LocalAuthenticationProvider(),
    authenticationStorage: new MMKVAuthenticationStorage({
      encryptionKey: Config.RNAPP_STORAGE_ENCRYPTION_KEY || '',
    }),
    initializers: [userInitializer, pushServiceInitializer],
  };
};

const createWelcomeVM = (context: interfaces.Context): IWelcomeVM => {
  return new WelcomeVM(context.container.get(AppModule.ROUTER));
};

const createLoginVM = (context: interfaces.Context): ILoginVM => {
  return new LoginVM(
    context.container.get(AppModule.ROUTER),
    context.container.get(AppModule.SESSION),
  );
};

const createRegisterVM = (context: interfaces.Context): IRegisterVM => {
  return new RegisterVM(
    context.container.get(AppModule.ROUTER),
    context.container.get(AppModule.SESSION),
  );
};

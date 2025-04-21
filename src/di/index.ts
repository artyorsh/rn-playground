import { Container } from 'inversify';

import { LoginScreenModule } from '@auth/login';
import { RegisterScreenModule } from '@auth/register';
import { SessionModule } from '@auth/session';
import { WelcomeScreenModule } from '@auth/welcome';
import { LogModule } from '@service/log';
import { PermissionModule } from '@service/permission';
import { PushNotificationModule } from '@service/push-notification';
import { RouterModule } from '@service/router';
import { UserModule } from '@service/user';

import { HomeScreenModule } from '../home';
import { SplashScreenModule } from '../splash';

export const container = new Container();

container.load(
  LogModule,
  RouterModule,
  PermissionModule,
  PushNotificationModule,
  UserModule,
  SessionModule,
  SplashScreenModule,
  WelcomeScreenModule,
  LoginScreenModule,
  RegisterScreenModule,
  HomeScreenModule,
);

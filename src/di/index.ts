import { Container } from 'inversify';

import { LoginScreenModule } from '@/auth/login';
import { RegisterScreenModule } from '@/auth/register';
import { SessionModule } from '@/auth/session';
import { WelcomeScreenModule } from '@/auth/welcome';
import { LogModule } from '@/log';
import { PermissionModule } from '@/permission';
import { PushNotificationModule } from '@/push-notification';
import { RouterModule } from '@/router';
import { UserModule } from '@/user';

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

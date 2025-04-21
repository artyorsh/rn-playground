import { Container } from 'inversify';

import { HomeScreenModule } from '@screens/home';
import { LoginScreenModule } from '@screens/login';
import { RegisterScreenModule } from '@screens/register';
import { SplashScreenModule } from '@screens/splash';
import { WelcomeScreenModule } from '@screens/welcome';
import { LogModule } from '@service/log';
import { NavigationModule } from '@service/navigation';
import { PermissionModule } from '@service/permission';
import { PushNotificationModule } from '@service/push-notification';
import { SessionModule } from '@service/session';
import { UserModule } from '@service/user';

export const container = new Container();

container.load(
  LogModule,
  NavigationModule,
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

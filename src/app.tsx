import React from 'react';
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

import { INavigationService } from './service/navigation/model';

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

export class App extends React.Component {

  private navigation: INavigationService;

  constructor(props: {}) {
    super(props);
    this.navigation = container.get<INavigationService>('navigation');
  }

  public render(): React.ReactElement {
    return this.navigation.getWindow();
  }
}

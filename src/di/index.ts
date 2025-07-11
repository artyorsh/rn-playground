import { Container } from 'inversify';

import { AuthModule } from '@/auth';
import { LogModule } from '@/log';
import { ModalModule } from '@/modal';
import { PushNotificationModule } from '@/push-notification';
import { RouterModule } from '@/router';
import { UserModule } from '@/user';

import { HomeScreenModule } from '../home';

export const container = new Container();

container.load(
  AuthModule,
  LogModule,
  RouterModule,
  PushNotificationModule,
  ModalModule,
  UserModule,
  HomeScreenModule,
);

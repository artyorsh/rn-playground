import { ContainerModule } from 'inversify';

import { LogServiceId } from '@service/log';
import { ILogService } from '@service/log/model';

import { IUserService } from './model';
import { IUserRepository, UserService } from './user.service';
import { UserApi } from './user-api';

export const UserServiceId: symbol = Symbol.for('UserService');

export const UserModule = new ContainerModule(bind => {
  bind<IUserService>(UserServiceId).toDynamicValue(context => {
    const logService = context.container.get<ILogService>(LogServiceId);
    const userApi: IUserRepository = new UserApi();

    return new UserService(userApi, logService);
  }).inSingletonScope();
});

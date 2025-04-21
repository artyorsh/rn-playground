import { ContainerModule } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';

import { IUserService } from './model';
import { IUserRepository, UserService } from './user.service';
import { UserApi } from './user-api';

export const UserModule = new ContainerModule(bind => {
  bind<IUserService>(AppModule.USER).toDynamicValue(context => {
    const logService = context.container.get<ILogService>(AppModule.LOG);
    const userApi: IUserRepository = new UserApi();

    return new UserService(userApi, logService);
  }).inSingletonScope();
});

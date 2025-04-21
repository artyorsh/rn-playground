import { ContainerModule } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';

import { IUserRepository, UserService } from './user.service';
import { UserApi } from './user-api';

export interface IUser {
  id: string;
  name: string;
}

export interface IUserService {
  getUser(): IUser;
}

export const UserModule = new ContainerModule(bind => {
  bind<IUserService>(AppModule.USER).toDynamicValue(context => {
    const logService = context.container.get<ILogService>(AppModule.LOG);
    const userApi: IUserRepository = new UserApi();

    return new UserService(userApi, logService);
  }).inSingletonScope();
});

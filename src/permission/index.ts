import { ContainerModule, interfaces } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';

import { NotificationPermissionController } from './controller/notification-permission-controller';
import { IPermissionController, PermissionService } from './permission.service';

export type IPermissionId =
  | 'notification';

export interface IPermissionService {
  /**
   * @returns {boolean} true if permission was granted, false otherwise.
   */
  isGranted(permissionId: IPermissionId): Promise<boolean>;
  /**
   * @param {PermissionRequestOptions} options - user request view customization options.
   * @returns a promise resolved if permission was given, rejected otherwise.
   */
  request(permissionId: IPermissionId): Promise<void>;
}

export const PermissionModule = new ContainerModule(bind => {
  bind<IPermissionService>(AppModule.PERMISSION)
    .toDynamicValue(context => createPermissionService(context))
    .inSingletonScope();
});

const createPermissionService = (context: interfaces.Context): IPermissionService => {
  const logService: ILogService = context.container.get(AppModule.LOG);

  const notificationPermissionController: IPermissionController = {
    isGranted: () => Promise.resolve(true),
    request: () => Promise.resolve(),
  };

  return new PermissionService(logService, {
    notification: notificationPermissionController,
  });
};

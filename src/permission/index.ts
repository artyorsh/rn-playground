import { ContainerModule } from 'inversify';

import { AppModule } from '@/di/model';
import { ILogService } from '@/log';

import { NotificationPermissionController } from './controller/notification-permission-controller';
import { PermissionService } from './permission.service';

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
  bind<IPermissionService>(AppModule.PERMISSION).toDynamicValue(context => {
    const logService: ILogService = context.container.get(AppModule.LOG);

    const notificationPermissionController = new NotificationPermissionController([
      'alert',
      'badge',
      'sound',
    ]);

    return new PermissionService(logService, {
      notification: notificationPermissionController,
    });
  }).inSingletonScope();
});

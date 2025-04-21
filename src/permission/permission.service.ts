import { ILogService } from '@/log';

import { IPermissionId, IPermissionService, MODULE_IDENTIFIER } from './model';

type IPermissionServiceOptions = Record<IPermissionId, IPermissionController>;

export interface IPermissionController {
  isGranted(): Promise<boolean>;
  /**
   * @returns a resolved promise if permission is granted, rejected otherwise
   */
  request(): Promise<void>;
}

export class PermissionService implements IPermissionService {

  private readonly controllers: Record<IPermissionId, IPermissionController>;

  constructor(
    private logService: ILogService,
    controllers: IPermissionServiceOptions,
  ) {
    this.controllers = controllers;
  }

  public isGranted(permissionId: IPermissionId): Promise<boolean> {
    const controller = this.controllers[permissionId];

    if (!controller) {
      this.throwNoControllerError(permissionId);
    }

    return controller.isGranted();
  }

  public request(permissionId: IPermissionId): Promise<void> {
    const controller = this.controllers[permissionId];

    if (!controller) {
      this.logService.error(MODULE_IDENTIFIER, `Controller for permission ${permissionId} not found`);

      throw new Error(`Controller for permission ${permissionId} not found`);
    }

    return controller.request().then(() => {
      this.logService.debug(MODULE_IDENTIFIER, `granted permission: ${permissionId}`);
    }).catch(e => {
      this.logService.error(MODULE_IDENTIFIER, `Error requesting permission ${permissionId}: ${e}`);

      throw e;
    });
  }

  private throwNoControllerError(permissionId: IPermissionId): never {
    this.logService.error(MODULE_IDENTIFIER, `Controller for permission ${permissionId} not found`);

    throw new Error(`Controller for permission ${permissionId} not found`);
  }
}

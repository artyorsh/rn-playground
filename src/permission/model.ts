export const MODULE_IDENTIFIER: string = 'PermissionService';

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

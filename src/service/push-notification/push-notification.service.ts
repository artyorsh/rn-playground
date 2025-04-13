import { ILogService } from '@service/log/model';
import { IPermissionService } from '@service/permission/model';
import { ISessionModule, ISessionService } from '@service/session/model';

import { IPushNotificationService, MODULE_IDENTIFIER } from './model';

export interface IPushNotification<Payload = any> {
  id: string;
  title: string;
  body: string;
  data: Payload;
}

export interface IPushNotificationToken {
  fcm: string | null;
  apns: string | null;
}

export interface IPushNotificationHandler {
  getName(): string;
  /**
   * @returns {true} if notification was handled, {false} otherwise
   */
  handleForeground(notification: IPushNotification): boolean;
  /**
   * @returns {true} if notification was handled, {false} otherwise
   */
  handleBackground(notification: IPushNotification): boolean;
  /**
   * @returns {true} if notification was handled, {false} otherwise
   */
  handleOpen(notification: IPushNotification): boolean;
}

export interface IPushServiceProvider {
  subscribe(handler: IPushNotificationHandler): void;
  getToken(): Promise<IPushNotificationToken>;
}

export interface IPushNotificationServiceOptions {
  provider: IPushServiceProvider;
  handlers: IPushNotificationHandler[];
  sessionService: ISessionService;
  permissionService: IPermissionService;
  logService: ILogService;
}

export class PushNotificationService implements IPushNotificationService, IPushNotificationHandler, ISessionModule {

  private provider: IPushServiceProvider;
  private handlers: IPushNotificationHandler[];
  private permissionService: IPermissionService;
  private logService: ILogService;

  constructor(options: IPushNotificationServiceOptions) {
    this.provider = options.provider;
    this.handlers = options.handlers;
    this.permissionService = options.permissionService;
    this.logService = options.logService;

    this.provider.subscribe(this);
    options.sessionService.addModule(this);
  }

  public authorize = (): Promise<void> => {
    return this.permissionService.request('notification').then(() => {
      return this.provider.getToken().then(token => {
        this.logService.debug(MODULE_IDENTIFIER, `registered token: ${JSON.stringify(token, null, 2)}`);
      });
    });
  };

  // IPushNotificationHandler

  public getName = (): string => {
    return 'PushNotificationService';
  };

  public handleForeground = (notification: IPushNotification): boolean => {
    const handler: IPushNotificationHandler | undefined = this.handlers.find(i => i.handleForeground?.(notification));
    this.logNotificationHandled(notification, handler?.getName());

    return !!handler;
  };

  public handleBackground = (notification: IPushNotification): boolean => {
    const handler: IPushNotificationHandler | undefined = this.handlers.find(i => i.handleBackground?.(notification));
    this.logNotificationHandled(notification, handler?.getName());

    return !!handler;
  };

  public handleOpen = (notification: IPushNotification): boolean => {
    const handler: IPushNotificationHandler | undefined = this.handlers.find(i => i.handleOpen?.(notification));
    this.logNotificationHandled(notification, handler?.getName());

    return !!handler;
  };

  // ISessionModule

  public initialize = (): Promise<void> => {
    return this.permissionService.isGranted('notification').then(granted => {
      if (granted) {
        return this.authorize();
      }
    });
  };

  public destroy = (): Promise<void> => {
    /* no-op */
    return Promise.resolve();
  };

  private logNotificationHandled = (notification: IPushNotification, handlerName?: string): void => {
    if (handlerName) {
      this.logService.debug(MODULE_IDENTIFIER, `handled notification with ${handlerName}, id: ${notification.id}`);
    } else {
      this.logService.error(MODULE_IDENTIFIER, `could not handle notification, id: ${notification.id}, payload: ${JSON.stringify(notification.data, null, 2)}`);
    }
  };
}

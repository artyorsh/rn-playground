import { ILogService } from '@/log';
import { IPermissionService } from '@/permission';

import { IPushNotificationService } from './model';
import { IPushNotificationHandler, IPushServiceProvider, PushNotificationService } from './push-notification.service';

jest.unmock('./push-notification.service');

describe('PushNotificationService', () => {

  let pushServiceProvider: IPushServiceProvider;
  let permissionService: IPermissionService;
  let notificationHandlers: IPushNotificationHandler[] = [];
  let logService: ILogService;

  let pushNotificationService: IPushNotificationService;

  beforeEach(() => {
    pushServiceProvider = {
      subscribe: jest.fn(),
      getToken: jest.fn(() => Promise.resolve({ fcm: 'fcm', apns: 'apns' })),
    };

    permissionService = {
      request: jest.fn(() => Promise.resolve()),
      isGranted: jest.fn(() => Promise.resolve(true)),
    };

    notificationHandlers = [
      {
        getName: jest.fn(() => 'ForegroundHandler'),
        handleForeground: jest.fn(() => true),
        handleBackground: jest.fn(() => false),
        handleOpen: jest.fn(() => false),
      },
      {
        getName: jest.fn(() => 'BackgroundHandler'),
        handleForeground: jest.fn(() => false),
        handleBackground: jest.fn(() => true),
        handleOpen: jest.fn(() => false),
      },
      {
        getName: jest.fn(() => 'OpenHandler'),
        handleForeground: jest.fn(() => false),
        handleBackground: jest.fn(() => false),
        handleOpen: jest.fn(() => true),
      },
    ];

    logService = jest.requireMock('@/log/log.service').LogService();

    pushNotificationService = new PushNotificationService(
      pushServiceProvider,
      notificationHandlers,
      permissionService,
      logService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should resolve authorize if permission is granted', async () => {
    await expect(pushNotificationService.authorize())
      .resolves
      .toEqual(undefined);
  });

  it('should reject authorize with permission denied error', async () => {
    permissionService.request = jest.fn(() => Promise.reject(new Error('Permission denied')));

    pushNotificationService = new PushNotificationService(
      pushServiceProvider,
      notificationHandlers,
      permissionService,
      logService,
    );

    await expect(pushNotificationService.authorize())
      .rejects
      .toThrow('Permission denied');
  });

  it('should handle foreground notifications', () => {
    pushServiceProvider.subscribe = jest.fn((handler: IPushNotificationHandler) => {
      handler.handleForeground({
        id: '1',
        title: 'Test',
        body: 'Test',
        data: {},
      });
    });

    pushNotificationService = new PushNotificationService(
      pushServiceProvider,
      notificationHandlers,
      permissionService,
      logService,
    );

    expect(notificationHandlers[0].handleForeground).toHaveBeenCalled();
  });

  it('should handle background notifications', () => {
    pushServiceProvider.subscribe = jest.fn((handler: IPushNotificationHandler) => {
      handler.handleBackground({
        id: '1',
        title: 'Test',
        body: 'Test',
        data: {},
      });
    });

    pushNotificationService = new PushNotificationService(
      pushServiceProvider,
      notificationHandlers,
      permissionService,
      logService,
    );

    expect(notificationHandlers[1].handleBackground).toHaveBeenCalled();
  });

  it('should handle open notifications', () => {
    pushServiceProvider.subscribe = jest.fn((handler: IPushNotificationHandler) => {
      handler.handleOpen({
        id: '1',
        title: 'Test',
        body: 'Test',
        data: {},
      });
    });

    pushNotificationService = new PushNotificationService(
      pushServiceProvider,
      notificationHandlers,
      permissionService,
      logService,
    );

    expect(notificationHandlers[2].handleOpen).toHaveBeenCalled();
  });

  it('should pass to next handler until handled', () => {
    pushServiceProvider.subscribe = jest.fn((handler: IPushNotificationHandler) => {
      handler.handleForeground({
        id: '1',
        title: 'Test',
        body: 'Test',
        data: {},
      });
    });

    notificationHandlers[0].handleForeground = jest.fn(() => false);
    notificationHandlers[1].handleForeground = jest.fn(() => true);
    notificationHandlers[2].handleForeground = jest.fn(() => false);

    pushNotificationService = new PushNotificationService(
      pushServiceProvider,
      notificationHandlers,
      permissionService,
      logService,
    );

    expect(notificationHandlers[0].handleForeground).toHaveBeenCalled();
    expect(notificationHandlers[1].handleForeground).toHaveBeenCalled();
    expect(notificationHandlers[2].handleForeground).not.toHaveBeenCalled();
  });

  it('should log an error if no handler handled notification', () => {
    pushServiceProvider.subscribe = jest.fn((handler: IPushNotificationHandler) => {
      handler.handleBackground({
        id: '1',
        title: 'Test',
        body: 'Test',
        data: {},
      });
    });

    pushNotificationService = new PushNotificationService(
      pushServiceProvider,
      [],
      permissionService,
      logService,
    );

    expect(logService.error).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('could not handle notification'),
    );
  });
});

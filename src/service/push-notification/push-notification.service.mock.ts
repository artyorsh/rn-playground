import { IPushNotificationService } from './model';

jest.mock('./push-notification.service', () => {
  const pushNotificationService: IPushNotificationService = {
    authorize: jest.fn(() => Promise.resolve()),
  };

  return {
    PushNotificationService: jest.fn().mockImplementation(() => pushNotificationService),
  };
});


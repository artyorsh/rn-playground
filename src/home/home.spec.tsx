import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { ISessionService } from '@/auth/session';
import { ILogService } from '@/log';
import { IPushNotificationService } from '@/push-notification/model';
import { IRouter } from '@/router/model';
import { IUserService } from '@/user/model';

import { Home, IHomeVM } from './home.component';
import { IHomeAPI } from './home.vm';
import { HomeVM } from './home.vm';

describe('Home', () => {

  let vm: IHomeVM;
  let router: IRouter;
  let sessionService: ISessionService;
  let userService: IUserService;
  let pushNotificationService: IPushNotificationService;
  let logService: ILogService;

  const dataProvider: IHomeAPI = {
    getPosts: jest.fn(() => Promise.resolve([])),
  };

  beforeEach(() => {
    router = jest.requireMock('@/router/react-navigation/react-navigation-router').RouterService();
    sessionService = jest.requireMock('@/auth/session/session.service').SessionService();
    userService = jest.requireMock('@/user/user.service').UserService();
    pushNotificationService = jest.requireMock('@/push-notification/push-notification.service').PushNotificationService();
    logService = jest.requireMock('@/log/log.service').LogService();

    vm = new HomeVM(
      sessionService,
      userService,
      pushNotificationService,
      router,
      logService,
      dataProvider,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render with user name in title', () => {
    const api = render(<Home vm={vm} />);
    expect(api.findByText(/Test User/)).toBeTruthy();
  });

  it('should replace with welcome screen when logged out', async () => {
    const api = render(<Home vm={vm} />);
    fireEvent.press(api.getByTestId('logout-button'));

    await waitFor(() => {
      expect(router.replace).toHaveBeenCalledWith('/welcome');
    });
  });

  it('should authorize push notifications', () => {
    const api = render(<Home vm={vm} />);
    fireEvent.press(api.getByTestId('notifications-button'));

    expect(pushNotificationService.authorize).toHaveBeenCalled();
  });

  it('should not navigate if logout is unsuccessful', async () => {
    sessionService.logout = jest.fn(() => Promise.reject());

    vm = new HomeVM(
      sessionService,
      userService,
      pushNotificationService,
      router,
      logService,
      dataProvider,
    );

    const api = render(<Home vm={vm} />);
    fireEvent.press(api.getByTestId('logout-button'));

    await waitFor(() => {
      expect(router.replace).not.toHaveBeenCalled();
    });
  });
});

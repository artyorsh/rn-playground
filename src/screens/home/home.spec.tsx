import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { ILogService } from '@service/log/model';
import { INavigationService } from '@service/navigation/model';
import { IPushNotificationService } from '@service/push-notification/model';
import { ISessionService } from '@service/session/model';
import { IUserService } from '@service/user/model';

import { Home, IHomeVM } from './home.component';
import { IHomeAPI } from './home.vm';
import { HomeVM } from './home.vm';

describe('Home', () => {

  let vm: IHomeVM;
  let navigationService: INavigationService;
  let sessionService: ISessionService;
  let userService: IUserService;
  let pushNotificationService: IPushNotificationService;
  let logService: ILogService;

  const dataProvider: IHomeAPI = {
    getPosts: jest.fn(() => Promise.resolve([])),
  };

  beforeEach(() => {
    navigationService = jest.requireMock('@service/navigation/navigation.service').NavigationService();
    sessionService = jest.requireMock('@service/session/session.service').SessionService();
    userService = jest.requireMock('@service/user/user.service').UserService();
    pushNotificationService = jest.requireMock('@service/push-notification/push-notification.service').PushNotificationService();
    logService = jest.requireMock('@service/log/log.service').LogService();

    vm = new HomeVM(
      sessionService,
      userService,
      pushNotificationService,
      navigationService,
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
      expect(navigationService.replace).toHaveBeenCalledWith('/welcome');
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
      navigationService,
      logService,
      dataProvider,
    );

    const api = render(<Home vm={vm} />);
    fireEvent.press(api.getByTestId('logout-button'));

    await waitFor(() => {
      expect(navigationService.replace).not.toHaveBeenCalled();
    });
  });
});

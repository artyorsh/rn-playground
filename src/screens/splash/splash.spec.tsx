import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

describe('Splash', () => {

  let navigationService: INavigationService;
  let sessionService: ISessionService;

  beforeEach(() => {
    navigationService = jest.requireMock('@service/navigation/navigation.service').NavigationService();
    sessionService = jest.requireMock('@service/session/session.service').SessionService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to home screen if session is restored', async () => {
    const vm: ISplashVM = new SplashVM(navigationService, sessionService);

    render(<Splash vm={vm} />);

    await waitFor(() => {
      return expect(navigationService.replace).toHaveBeenCalledWith('/home');
    });
  });

  it('should navigate to welcome screen if session is not restored', async () => {
    sessionService.restore = jest.fn(() => Promise.reject());
    const vm: ISplashVM = new SplashVM(navigationService, sessionService);

    render(<Splash vm={vm} />);

    await waitFor(() => {
      return expect(navigationService.replace).toHaveBeenCalledWith('/welcome');
    });
  });
});

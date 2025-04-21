import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import { ISessionService } from '@/auth/session';
import { IRouter } from '@/router/model';

import { ISplashVM, Splash } from './splash.component';
import { SplashVM } from './splash.vm';

describe('Splash', () => {

  let router: IRouter;
  let sessionService: ISessionService;

  beforeEach(() => {
    router = jest.requireMock('@/router/react-navigation/react-navigation-router').RouterService();
    sessionService = jest.requireMock('@/auth/session/session.service').SessionService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to home screen if session is restored', async () => {
    const vm: ISplashVM = new SplashVM(router, sessionService);

    render(<Splash vm={vm} />);

    await waitFor(() => {
      return expect(router.replace).toHaveBeenCalledWith('/home');
    });
  });

  it('should navigate to welcome screen if session is not restored', async () => {
    sessionService.restore = jest.fn(() => Promise.reject());
    const vm: ISplashVM = new SplashVM(router, sessionService);

    render(<Splash vm={vm} />);

    await waitFor(() => {
      return expect(router.replace).toHaveBeenCalledWith('/welcome');
    });
  });
});

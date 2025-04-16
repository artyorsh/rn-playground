import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { IRegisterVM, Register } from './register.component';
import { RegisterVM } from './register.vm';

describe('Register Component', () => {

  let vm: IRegisterVM;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    vm = {
      title: 'Register Title',
      submit: jest.fn(),
      goBack: jest.fn(),
    };
  });

  it('should render without initial values', () => {
    const api = render(<Register vm={vm} />);

    expect(api.getByTestId('email-input').props.value).toBe('');
    expect(api.getByTestId('password-input').props.value).toBe('');
  });

  it('should call submit with correct values', () => {
    const api = render(<Register vm={vm} />);

    fireEvent.changeText(api.getByTestId('email-input'), 'test2@test.com');
    fireEvent.changeText(api.getByTestId('password-input'), 'password2');

    fireEvent.press(api.getByTestId('submit-button'));

    expect(vm.submit).toHaveBeenCalledWith({ email: 'test2@test.com', password: 'password2' });
  });
});

describe('Register VM', () => {
  let navigationService: INavigationService;
  let sessionService: ISessionService;

  beforeEach(() => {
    navigationService = jest.requireMock('@service/navigation/navigation.service').NavigationService();
    sessionService = jest.requireMock('@service/session/session.service').SessionService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to home screen if registration is successful', async () => {
    const vm: IRegisterVM = new RegisterVM(navigationService, sessionService);

    vm.submit({ email: 'test@test.com', password: 'password' });

    await waitFor(() => {
      expect(navigationService.replace).toHaveBeenCalledWith('/home');
    });
  });

  it('should not navigate if registration is unsuccessful', async () => {
    sessionService.register = jest.fn(() => Promise.reject());
    const vm: IRegisterVM = new RegisterVM(navigationService, sessionService);

    vm.submit({ email: 'test@test.com', password: 'password' });

    await waitFor(() => {
      expect(navigationService.replace).not.toHaveBeenCalled();
    });
  });
});

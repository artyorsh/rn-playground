import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { ILoginVM, Login } from './login.component';
import { LoginVM } from './login.vm';

describe('Login Component', () => {

  let vm: ILoginVM;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    vm = {
      title: 'Login Title',
      initialValues: {
        email: '',
        password: '',
      },
      submit: jest.fn(),
      goBack: jest.fn(),
    };
  });

  it('should render with initial email and password', () => {
    vm.initialValues = {
      email: 'test@test.com',
      password: 'password',
    };

    const api = render(<Login vm={vm} />);

    expect(api.getByTestId('email-input').props.value).toBe('test@test.com');
    expect(api.getByTestId('password-input').props.value).toBe('password');
  });

  it('should call submit with initial values', () => {
    vm.initialValues = {
      email: 'test@test.com',
      password: 'password',
    };

    const api = render(<Login vm={vm} />);

    fireEvent.press(api.getByTestId('submit-button'));

    expect(vm.submit).toHaveBeenCalledWith({ email: 'test@test.com', password: 'password' });
  });

  it('should call submit with updated email and password', () => {
    const api = render(<Login vm={vm} />);

    fireEvent.changeText(api.getByTestId('email-input'), 'test2@test.com');
    fireEvent.changeText(api.getByTestId('password-input'), 'password2');

    fireEvent.press(api.getByTestId('submit-button'));

    expect(vm.submit).toHaveBeenCalledWith({ email: 'test2@test.com', password: 'password2' });
  });
});

describe('Login VM', () => {
  let navigationService: INavigationService;
  let sessionService: ISessionService;

  beforeEach(() => {
    navigationService = jest.requireMock('@service/navigation/navigation.service').NavigationService();
    sessionService = jest.requireMock('@service/session/session.service').SessionService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to home screen if login is successful', async () => {
    const vm: ILoginVM = new LoginVM(navigationService, sessionService);

    vm.submit({ email: 'test@test.com', password: 'password' });

    await waitFor(() => {
      expect(navigationService.replace).toHaveBeenCalledWith('/home');
    });
  });

  it('should not navigate if login is unsuccessful', async () => {
    sessionService.login = jest.fn(() => Promise.reject());
    const vm: ILoginVM = new LoginVM(navigationService, sessionService);

    vm.submit({ email: 'test@test.com', password: 'password' });

    await waitFor(() => {
      expect(navigationService.replace).not.toHaveBeenCalled();
    });
  });

});

import { INavigationLifecycleListener, INavigationService, IRoute } from './model';

jest.mock('./navigation.service', () => {
  const navigationService: INavigationService = {
    navigator: jest.fn(),
    goTo: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn(),
    subscribe: jest.fn((_route: IRoute, listener: INavigationLifecycleListener) => {
      listener.onFocus();

      return jest.fn(() => {
        listener.onBlur();
      });
    }),
  };

  return {
    NavigationService: jest.fn().mockImplementation(() => navigationService),
  };
});

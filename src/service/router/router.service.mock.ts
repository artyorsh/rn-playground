import { INavigationLifecycleListener, IRoute, IRouter } from './model';

jest.mock('./router.service', () => {
  const routerService: IRouter = {
    getWindow: jest.fn(),
    navigate: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn(),
    subscribe: jest.fn((_route: IRoute, listener: INavigationLifecycleListener) => {
      listener.onFocus?.();

      return jest.fn(() => {
        listener.onBlur?.();
      });
    }),
  };

  return {
    RouterService: jest.fn().mockImplementation(() => routerService),
  };
});

import { IUserService } from '.';

jest.mock('./user.service', () => {
  const userService: IUserService = {
    getUser: jest.fn(() => ({ id: '1', name: 'Test User' })),
  };

  return {
    UserService: jest.fn().mockImplementation(() => userService),
  };
});


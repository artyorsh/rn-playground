import { ISession, ISessionInitializer } from '@/auth/session/model';
import { ILogService } from '@/log/model';

import { IUser, IUserService } from './model';

export interface IUserRepository {
  getUser(userId: string): Promise<IUser>;
}

export class UserService implements IUserService, ISessionInitializer {

  private user: IUser | null = null;

  constructor(private userRepository: IUserRepository, private logService: ILogService) {}

  public getUser = (): IUser => {
    if (!this.user) {
      throw new Error('User not found. Was the session initialized?');
    }

    return this.user;
  };

  public initialize = (session: ISession): Promise<void> => {
    return this.userRepository.getUser(session.userId).then(user => {
      this.user = user;
      this.logService.addLabel('user_id', user.id);
    });
  };

  public destroy = (): Promise<void> => {
    this.user = null;

    return Promise.resolve();
  };
}

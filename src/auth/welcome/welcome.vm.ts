import { IRouter } from '@/router/model';

import { IWelcomeVM } from './welcome.component';

export class WelcomeVM implements IWelcomeVM {

  public readonly title = 'Welcome';

  constructor(private router: IRouter) {
  }

  public login = (): void => {
    this.router.navigate('/login');
  };

  public register = (): void => {
    this.router.navigate('/register');
  };
}

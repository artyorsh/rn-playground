import { INavigationService } from '@service/navigation/model';

import { IWelcomeVM } from './welcome.component';

export class WelcomeVM implements IWelcomeVM {

  public readonly title = 'Welcome';

  constructor(private navigationService: INavigationService) {
  }

  public login = (): void => {
    this.navigationService.navigate('/login');
  };

  public register = (): void => {
    this.navigationService.navigate('/register');
  };
}

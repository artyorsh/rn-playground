import { INavigationLifecycleListener, INavigationService } from '@service/navigation/model';
import { ISessionService } from '@service/session/model';

import { ISplashVM } from './splash.component';

export class SplashVM implements ISplashVM, INavigationLifecycleListener {

  public readonly title = 'Hello';

  constructor(private navigation: INavigationService, private session: ISessionService) {
    navigation.subscribe('/', this);
  }

  public onFocus = (): void => {
    this.session.restore().then(() => {
      this.navigation.replace('/home');
    }).catch(() => {
      this.navigation.replace('/welcome');
    });
  };

  public onBlur = (): void => {
    /* no-op */
  };
}

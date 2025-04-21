import { INavigationLifecycleListener, IRouter } from '@service/router/model';
import { ISessionService } from '@service/session/model';

import { ISplashVM } from './splash.component';

export class SplashVM implements ISplashVM, INavigationLifecycleListener {

  public readonly title = 'Hello';

  constructor(private navigation: IRouter, private session: ISessionService) {
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

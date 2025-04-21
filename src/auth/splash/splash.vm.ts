import { ISessionService } from '@/auth/session';
import { INavigationLifecycleListener, IRouter } from '@/router';

import { ISplashVM } from './splash.component';

export class SplashVM implements ISplashVM, INavigationLifecycleListener {

  public readonly title = 'Hello';

  constructor(private router: IRouter, private session: ISessionService) {
    router.subscribe('/', this);
  }

  public onFocus = (): void => {
    this.session.restore().then(() => {
      this.router.replace('/home');
    }).catch(() => {
      this.router.replace('/welcome');
    });
  };

  public onBlur = (): void => {
    /* no-op */
  };
}

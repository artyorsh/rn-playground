import { AppModule, lazyInject } from '../../di/container';
import { INavigationService } from '../../service/navigation/model';
import { INavigationScreenLifecycle, INavigationScreenLifecycleListener } from '../../service/navigation/components/navigation-screen.container';
import { ISplashVM } from './splash.component';

export class SplashVM implements ISplashVM, INavigationScreenLifecycleListener {

  @lazyInject(AppModule.NAVIGATION) private navigation!: INavigationService;

  public readonly title = 'Hello';

  constructor(lifecycle: INavigationScreenLifecycle) {
    lifecycle.subscribe(this)
  }

  public onMount = (): void => {
    setTimeout(() => {
      this.navigation.goTo('/welcome');
    }, 2000);
  }
}

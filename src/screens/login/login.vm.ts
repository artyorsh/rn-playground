
import { AppModule, lazyInject } from '../../di/container';
import { INavigationService } from '../../service/navigation/model';
import { ILoginVM } from './login.component';
import { ILogService } from '../../service/log/model';
import { INavigationScreenLifecycle } from '../../service/navigation/components/navigation-screen.container';
import { ILoginFormValues } from './components/login-form.component';

export class LoginVM implements ILoginVM {

  @lazyInject(AppModule.NAVIGATION) private navigation!: INavigationService;
  @lazyInject(AppModule.LOG) private log!: ILogService;

  public readonly initialValues: ILoginFormValues = {
    email: '',
    password: '',
  };

  constructor(_lifecycle: INavigationScreenLifecycle) {

  }
  
  public submit = (values: ILoginFormValues): void => {
    this.log.info('LoginVM', 'submit');
    this.navigation.replace('/overview');
  }

  public goBack = (): void => {
    this.navigation.goBack();
  }

}

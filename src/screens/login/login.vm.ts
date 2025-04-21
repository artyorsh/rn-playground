import { IRouter } from '@service/router/model';
import { ISessionService } from '@service/session/model';

import { ILoginFormValues } from './components/login-form.component';
import { ILoginVM } from './login.component';

export class LoginVM implements ILoginVM {

  public readonly title = 'Login';

  public readonly initialValues: ILoginFormValues = {
    email: 'test@test.com',
    password: 'password',
  };

  constructor(private router: IRouter, private sessionService: ISessionService) {
  }

  public submit = (values: ILoginFormValues): void => {
    this.sessionService.login(values.email, values.password).then(() => {
      this.router.replace('/home');
    }).catch(() => {
      /* no-op */
    });
  };

  public goBack = (): void => {
    this.router.goBack();
  };

}

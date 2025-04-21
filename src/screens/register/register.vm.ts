import { IRouter } from '@service/router/model';
import { ISessionService } from '@service/session/model';

import { IRegisterFormValues } from './components/register-form.component';
import { IRegisterVM } from './register.component';

export class RegisterVM implements IRegisterVM {

  public readonly title = 'Register';

  constructor(private navigationService: IRouter, private sessionService: ISessionService) {
  }

  public submit = (values: IRegisterFormValues): void => {
    this.sessionService.register(values.email, values.password).then(() => {
      this.navigationService.replace('/home');
    }).catch(() => {
      /* no-op */
    });
  };

  public goBack = (): void => {
    this.navigationService.goBack();
  };

}

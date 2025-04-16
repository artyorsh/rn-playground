import { computed, makeAutoObservable, observable } from 'mobx';

import { ILogService } from '@service/log/model';
import { INavigationLifecycleListener, INavigationService } from '@service/navigation/model';
import { IPushNotificationService } from '@service/push-notification/model';
import { ISessionService } from '@service/session/model';
import { IUserService } from '@service/user/model';

import { IHomeVM } from './home.component';
import { IPost } from './posts-list/model';
import { IPostsListVM } from './posts-list/posts-list.component';
import { PostsListVM } from './posts-list/posts-list.vm';
import { IWelcomeHeaderVM } from './welcome-header/welcome-header.component';

export interface IHomeAPI {
  getPosts(): Promise<IPost[]>;
}

export class HomeVM implements IHomeVM, INavigationLifecycleListener {

  @observable public posts!: IPostsListVM;

  @computed public get loading(): boolean {
    return !this.posts;
  }

  @computed public get welcomeHeader(): IWelcomeHeaderVM {
    return {
      title: `Hello, ${this.userService.getUser().name}`,
      viewNotifications: this.viewNotifications,
      logout: this.logout,
    };
  }

  constructor(
    private sessionService: ISessionService,
    private userService: IUserService,
    private pushNotificationService: IPushNotificationService,
    private navigationService: INavigationService,
    private logService: ILogService,
    private api: IHomeAPI,
  ) {

    navigationService.subscribe('/home', this);
    makeAutoObservable(this);
  }

  public onFocus = async (): Promise<void> => {
    const posts = await this.api.getPosts();
    this.posts = new PostsListVM(posts, { logger: this.logService });
  };

  public onBlur = (): void => {
    /* no-op */
  };

  public logout = (): void => {
    this.sessionService.logout().then(() => {
      this.navigationService.replace('/welcome');
    }).catch(() => {
      /* no-op */
    });
  };

  private viewNotifications = (): void => {
    this.pushNotificationService.authorize();
  };
}

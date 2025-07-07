import { computed } from 'mobx';

import { ILogService } from '@/log';
import { IModalService, PresentationType } from '@/modal';

import { IPost } from './model';
import { IPostVM } from './post-item.component';
import { PostItemDetails } from './post-item-details.component';
import { IPostsListVM } from './posts-list.component';

export interface IPostsListOptions {
  modalService: IModalService;
  logger: ILogService;
}

export class PostsListVM implements IPostsListVM {

  private modalService: IModalService;
  private logger: ILogService;

  constructor(private data: IPost[], options: IPostsListOptions) {
    this.modalService = options.modalService;
    this.logger = options.logger;
  }

  @computed public get posts(): IPostVM[] {
    return this.data
      .map((post) => this.createPostVM(post));
  }

  private createPostVM = (post: IPost): IPostVM => {
    return {
      title: post.title,
      body: post.body,
      image: { uri: post.image_url },
      viewDetails: () => this.viewPostDetails(post),
    };
  };

  private viewPostDetails = (post: IPost): Promise<string> => {
    this.logger.info('PostsListVM', `viewPostDetails: ${post.id}`);

    return this.modalService.show(controller => (
      <PostItemDetails
        post={post}
        onRequestClose={() => {
          this.logger.info('PostsListVM', `onRequestClose: ${post.id}`);

          return controller.resolve();
        }}
      />
    ), PresentationType.BOTTOM_SHEET);
  };
}

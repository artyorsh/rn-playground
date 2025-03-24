import { ImageSourcePropType } from 'react-native';
import { computed } from 'mobx';

import { AppModule, lazyInject } from '../../di/container';
import { INavigationService } from '../../service/navigation/model';
import { FAQVM } from './components/faq/faq.vm';
import { GrowthRateVM } from './components/growth-rate/growth-rate.vm';
import { IProductDetailsSection, IProductDetailsVM } from './product-details.component';
import { ILogService } from '../../service/log/model';
import { INavigationScreenLifecycle } from '../../service/navigation/components/navigation-screen.container';

export class ProductDetailsVM implements IProductDetailsVM {

  @lazyInject(AppModule.NAVIGATION) private navigation!: INavigationService;
  @lazyInject(AppModule.LOG) private log!: ILogService;

  constructor(_lifecycle: INavigationScreenLifecycle, private productId: string) {

  }

  @computed public get images(): ImageSourcePropType[] {
    return [{ uri: 'https://documents.timeless.investments/assets/338340c4-152e-406d-a9bc-20f7f12f8cca/documents/13cc7bab-7b74-4116-89ea-4785d865614e-1704.jpeg' }];
  }

  @computed public get title(): string {
    return 'Jaguar';
  }

  @computed public get description(): string {
    return `E-TYPE ROADSTER\n${this.productId}`;
  }

  @computed public get sections(): IProductDetailsSection[] {
    return [
      { id: '@product-details/growth-rate', vm: new GrowthRateVM() },
      { id: '@product-details/faq', vm: new FAQVM() },
    ];
  }

  public share = (): void => {
    this.log.info('ProductDetailsVM', 'Sharing product details', { productId: this.productId });
  };

  public goBack = (): void => {
    this.navigation.goBack();
  };

  public handleError = (message: string): void => {
    console.error('Product Details', message);
  };

}

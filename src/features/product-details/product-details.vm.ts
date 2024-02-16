import { computed } from 'mobx';
import { ImageSourcePropType } from "react-native";
import { IProductDetailsVM } from "./product-details.component";
import { AppModule, lazyInject } from '../../di/container';
import { INavigationService } from '../../service/navigation/model';

export class ProductDetailsVM implements IProductDetailsVM {

  @lazyInject(AppModule.NAVIGATION) private navigation!: INavigationService;

  @computed public get images(): ImageSourcePropType[] {
    return [
      { uri: 'https://documents.timeless.investments/assets/338340c4-152e-406d-a9bc-20f7f12f8cca/documents/13cc7bab-7b74-4116-89ea-4785d865614e-1704.jpeg' },
    ];
  }

  @computed public get title(): string {
    return 'Jaguar';
  }

  @computed public get description(): string {
    return 'E-TYPE ROADSTER'
  }

  public share = (): void => {
    console.log('SHARE')
  }

  public goBack = (): void => {
    this.navigation.goBack();
  }
  
}
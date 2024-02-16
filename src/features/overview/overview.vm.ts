import { observable, computed, action, makeAutoObservable } from 'mobx'
import { IProductItemVM } from "./components/product-item.component";
import { IProductListVM } from "./components/product-list.component";
import { IOverviewVM } from "./overview.component";
import { IOverview, IProduct } from "./overview.model";
import { AppModule, lazyInject } from '../../di/container';
import { INavigationService } from '../../service/navigation/model';

export interface IOverviewAPI {
  getOverview(): Promise<IOverview>;
}

export class OverviewVM implements IOverviewVM {

  @observable private model?: IOverview;

  @lazyInject(AppModule.NAVIGATION) private navigation!: INavigationService;

  constructor(private api: IOverviewAPI) {
    makeAutoObservable(this)

    this.api.getOverview()
      .then(overview => this.setProducts(overview))
  }

  @computed public get loading(): boolean {
    return !this.model;
  }

  @computed public get products(): IProductListVM {
    return {
      products: this.model?.products.map(this.createProductVM) || [],
    };
  }

  @action private setProducts = (overview: IOverview): void => {
    this.model = overview;
  }; 

  private createProductVM = (product: IProduct): IProductItemVM => {
    return {
      title: product.title,
      image: { uri: product.image_url },
      marketPrice: product.market_price,
      price: product.platform_price,
      backgroundColor: this.getProductColor(product),
      viewDetails: () => this.navigation.goTo('/', { productId: product.id }),
    };
  };

  private getProductColor = (product: IProduct): string => {
    return 'purple';
  };

}
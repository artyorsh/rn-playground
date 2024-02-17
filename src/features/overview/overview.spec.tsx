import { fireEvent, render, RenderAPI } from '@testing-library/react-native';
import { IOverviewVM, Overview } from "./overview.component"
import { IOverviewAPI, OverviewVM } from './overview.vm';
import { IOverview } from './overview.model';

describe('Overview Component', () => {

  const testVM: IOverviewVM = {
    loading: false,
    products: {
      products: [
        { 
          title: 'Product 1',
          image: { uri: 'https://' },
          marketPrice: '100$',
          price: '50$',
          viewDetails: jest.fn(),
        },
        { 
          title: 'Product 2',
          image: { uri: 'https://' },
          marketPrice: '110$',
          price: '60$',
          viewDetails: jest.fn(),
        }
      ],
    },
  };

  it('renders given number of products', () => {
    const api: RenderAPI = render(<Overview vm={testVM} />);
    expect(api.queryAllByTestId('@overview/product-item').length).toEqual(2);
  });
  
  it('pressing product item calls viewDetails function', () => {
    const api: RenderAPI = render(<Overview vm={testVM} />);
    fireEvent.press(api.queryAllByTestId('@overview/product-item')[0]);

    expect(testVM.products.products[0].viewDetails).toHaveBeenCalled();
  });
});

describe('Overview VM', () => {

  const data: IOverview = {
    products: [
      { 
        id: '@overview/product-id-0',
        title: 'Product title 1',
        image_url: 'https://',
        market_price: '100$',
        platform_price: '50$',
      }
    ],
  }; 

  const api: IOverviewAPI = {
    getOverview: () => new Promise(resolve => {
      setTimeout(() => resolve(data), 50);
    }),
  };
  
  it('is loading while does not have data', () => {
    const vm: IOverviewVM = new OverviewVM(api);
    expect(vm.loading).toEqual(true);
  });

  it('is not loading when data is received', () => {
    const vm: IOverviewVM = new OverviewVM(api);
    setTimeout(() => expect(vm.loading).toEqual(false), 100);
  })
});
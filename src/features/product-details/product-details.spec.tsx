import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';

import { FAQVM } from './components/faq/faq.vm';
import { GrowthRateVM } from './components/growth-rate/growth-rate.vm';
import { IProductDetailsVM, ProductDetails } from './product-details.component';

describe('Product Details Component', () => {

  const testVM: IProductDetailsVM = {
    images: [],
    title: 'Product Title',
    description: 'Product Description',
    sections: [
      { id: '@product-details/growth-rate', vm: new GrowthRateVM() },
      { id: '@product-details/faq', vm: new FAQVM() },
    ],
    share: jest.fn(),
    goBack: jest.fn(),
    handleError: jest.fn(),
  };

  it('renders given data', () => {
    const api: RenderAPI = render(<ProductDetails vm={testVM} />);
    expect(api.queryByText('Product Title')).toBeTruthy();
    expect(api.queryByText('Product Description')).toBeTruthy();
    expect(api.queryAllByTestId('@product-details/section').length).toEqual(2);
  });

  it('pressing share button calls share function', () => {
    const api: RenderAPI = render(<ProductDetails vm={testVM} />);
    fireEvent.press(api.queryByTestId('@product-details/share'));
    expect(testVM.share).toHaveBeenCalled();
  });

  it('pressing back button calls goBack function', () => {
    const api: RenderAPI = render(<ProductDetails vm={testVM} />);
    fireEvent.press(api.queryByTestId('@product-details/back'));
    expect(testVM.goBack).toHaveBeenCalled();
  });
});

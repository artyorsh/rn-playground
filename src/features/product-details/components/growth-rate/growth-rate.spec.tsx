import { RenderAPI, render, fireEvent } from "@testing-library/react-native";
import { IGrowthRateVM, GrowthRate } from "./growth-rate.component";

describe('Growth Rate Component', () => {

  const vm: IGrowthRateVM = {
    rate: '17%',
    growthPeriod: '01.01.2024-01.02.2024',
    dropDate: '01.02.2024',
    dropPrice: '100$',
    viewDetails: jest.fn(),
  }; 

  it('is loading while does not have data', () => {
    const api: RenderAPI = render(<GrowthRate vm={vm} />);
    expect(api.queryByText('17%')).toBeTruthy();
    expect(api.queryByText('01.01.2024-01.02.2024')).toBeTruthy();
    expect(api.queryByText('01.02.2024')).toBeTruthy();
    expect(api.queryByText('100$')).toBeTruthy();
  });

  it('pressing View Details button calls viewDetails function', () => {
    const api: RenderAPI = render(<GrowthRate vm={vm} />);
    fireEvent.press(api.queryByTestId('@growth-rate/view-details'));
    expect(vm.viewDetails).toHaveBeenCalled();
  });
});
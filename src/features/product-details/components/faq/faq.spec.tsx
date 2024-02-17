import { RenderAPI, render, fireEvent } from "@testing-library/react-native";
import { FAQ, IFAQVM } from "./faq.component";

describe('FAQ Component', () => {

  const vm: IFAQVM = {
    questions: [
      { title: 'Question 1', viewAnswer: jest.fn() },
      { title: 'Question 2', viewAnswer: jest.fn() },
    ],
    viewMore: jest.fn(),
  }; 

  it('renders given number of questions', () => {
    const api: RenderAPI = render(<FAQ vm={vm} />);
    expect(api.queryByText('Question 1')).toBeTruthy();
    expect(api.queryByText('Question 2')).toBeTruthy();
  });

  it('pressing a question invokes viewAnswer function', () => {
    const api: RenderAPI = render(<FAQ vm={vm} />);
    fireEvent.press(api.queryAllByTestId('@faq/question')[0]);
    expect(vm.questions[0].viewAnswer).toHaveBeenCalled();
  });
  
  it('pressing View More button invokes viewMore function', () => {
    const api: RenderAPI = render(<FAQ vm={vm} />);
    fireEvent.press(api.queryByTestId('@faq/view-more'));
    expect(vm.viewMore).toHaveBeenCalled();
  });
});
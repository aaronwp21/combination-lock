import Counter from './Counter'
import {render, screen, fireEvent} from '@testing-library/react'

describe('<Counter />', () => {
  it('renders', () => {
    render(<Counter />);
  })
  it('It shows a number', () => {
    // arrange
    render(<Counter />);

    // act (not here)

    // assert
    const numberDisplay = screen.getByTestId('number-display')
    expect(numberDisplay).toBeInTheDocument();
  })
  // It has a plus button
  it('It has a plus button', () => {
    // arrange
    render(<Counter />);

    // act (not here)

    // assert
    const plusButton = screen.getByTestId('plus-button')
    expect(plusButton).toBeInTheDocument();
    expect(plusButton).toHaveTextContent('+');
  })
  // When I click the plus button it increments the number
  it('When I click the plus button it increments the number', () => {
    // arrange
    render(<Counter />);

    // act (not here)

    // assert
    const numberDisplay = screen.getByTestId('number-display');
    expect(numberDisplay).toHaveTextContent('0');
    const plusButton = screen.getByTestId('plus-button')
    fireEvent["click"](plusButton, {
      bubbles: true,
      cancelable: true,
    });
    expect(numberDisplay).toHaveTextContent('1');
  })
  // It has a minus button
  // When I click the minus button it decrement the number
});
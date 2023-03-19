import {useContext} from 'react'
import {render, screen, fireEvent,} from '@testing-library/react'
import { UIProvider, UIContext } from "./UI.context";


/*
isOpen,
        hideDuration: 6000,
        onClose,
        message,
        showMessage,
        severity,
*/

const testMessage = 'Test Message';

const demoMessage = { type: 'success', string: testMessage };

const TestComponent = () => {
  const {isOpen, onClose, showMessage, message} = useContext(UIContext)

  return (
    <>
      <p data-testid="open">
        {JSON.stringify(isOpen)}
      </p>
      <p data-testid="message">
        {message}
      </p>
      <button data-testid="showMessage" onClick={() => showMessage(demoMessage)}>Open</button>
      <button data-testid="close" onClick={onClose}>Close</button>
    </>
  )
}

describe('<UIContext />', () => { 
  it('renders', () => {
    render(<TestComponent />)
  })

  it('calling showMessage displays a message', async () => {
    // ARRANGE
    render(<UIProvider><TestComponent/></UIProvider>)

    const showButton = screen.getByTestId('showMessage');
    // const closeButton = screen.getByTestId('close');
    const openStateDisplay = screen.getByTestId('open');
    const messageDisplay = screen.getByTestId('message');

    // [PRE-]ASSERT
    expect(openStateDisplay).toHaveTextContent('false');
    
    // ACT
    fireEvent["click"](showButton, {
      bubbles: true,
      cancelable: true,
    });
    
    screen.debug()
    // ASSERT
    expect(openStateDisplay).toHaveTextContent('true');
    expect(messageDisplay).toHaveTextContent(testMessage);

  })

  it('calling onClose closes and removes the message', async () => {
    // ARRANGE
    render(<UIProvider><TestComponent/></UIProvider>)

    const showButton = screen.getByTestId('showMessage');
    const closeButton = screen.getByTestId('close');
    const openStateDisplay = screen.getByTestId('open');
    const messageDisplay = screen.getByTestId('message');

    // ACT (not needed in this test)

    // ASSERT

    // Simple
    // const listing = await screen.findByText(testCar.name);

    // If text joined together
    // const listing = await screen.findByText(complexTextSearch(testCar.name));

    // screen.debug();
    // expect(listing).toBeInTheDocument()
  })
})
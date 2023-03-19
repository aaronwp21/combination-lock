import { afterEach, vi } from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";
// import { complexTextSearch } from '../../test-utils';
import CarsList from "./CarsList";

const testCar = {
  _id: 1,
  name: 'Test Car',
  bhp: 1,
  avatar_url: "https://static.thenounproject.com/png/449586-200.png"
};

const testCars = [testCar];

describe('<CarsList />', () => { 
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders', () => {
    render(<Router><CarsList /></Router>)
  })

  it('displays a list of cars', async () => {
    // ARRANGE
    render(<Router><CarsList cars={testCars} /></Router>)

    // ACT (not needed in this test)

    // ASSERT

    // Simple
    const listing = await screen.findByText(testCar.name);

    // If text joined together
    // const listing = await screen.findByText(complexTextSearch(testCar.name));

    screen.debug();
    expect(listing).toBeInTheDocument()
  })
  it('fires the delete function when the delete button is pressed', async () => {

    const testFn = () => console.log('Close function fired')
    const mock = vi.fn().mockImplementation(testFn)

    // If you're mocking something existing, like location.reload()
    // const spy = vi.spyOn(messages, 'getLatest')
    // expect(spy.getMockName()).toEqual('getLatest')


    // ARRANGE
    render(<Router><CarsList cars={testCars} deleteHandler={mock} /></Router>)

    // ACT (not needed in this test)
    const deleteButton = screen.getByTestId('delete');
    fireEvent["click"](deleteButton, {
      bubbles: true,
      cancelable: true,
    });

    // ASSERT
    expect(mock).toHaveBeenCalledTimes(1)
  })
})
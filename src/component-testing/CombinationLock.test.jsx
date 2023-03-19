import CombinationLock from "./CombinationLock";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<CombinationLock />", () => {
  it("renders", () => {
    render(<CombinationLock />);
  });
  it("displays a locked padlock as default", () => {
    render(<CombinationLock />);

    const lock = screen.getByTestId("LockIcon");
    expect(lock).toBeInTheDocument();
  });
  it("has four inputs and a submit button", () => {
    render(<CombinationLock />);

    const input1 = screen.getByTestId("input1");
    const input2 = screen.getByTestId("input2");
    const input3 = screen.getByTestId("input3");
    const input4 = screen.getByTestId("input4");
    const submitButton = screen.getByTestId("submit-button");

    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(input4).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Submit");
  });
  it("should not change lock icon to an unlocked padlock when incorrect code is entered", () => {
    render(<CombinationLock combination="4893" />);

    const input1 = screen.getByTestId("input1");
    const input2 = screen.getByTestId("input2");
    const input3 = screen.getByTestId("input3");
    const input4 = screen.getByTestId("input4");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(input1, { target: { value: "1" } });
    fireEvent.change(input2, { target: { value: "2" } });
    fireEvent.change(input3, { target: { value: "3" } });
    fireEvent.change(input4, { target: { value: "4" } });
    fireEvent["click"](submitButton, {
      bubbles: true,
      cancelable: true,
    });
    const lock = screen.getByTestId("LockIcon");
    expect(lock).toBeInTheDocument();
  });
  it("should change lock icon to an unlocked padlock when correct code is entered", () => {
    render(<CombinationLock combination="4893" />);

    const input1 = screen.getByTestId("input1");
    const input2 = screen.getByTestId("input2");
    const input3 = screen.getByTestId("input3");
    const input4 = screen.getByTestId("input4");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(input1, { target: { value: "4" } });
    fireEvent.change(input2, { target: { value: "8" } });
    fireEvent.change(input3, { target: { value: "9" } });
    fireEvent.change(input4, { target: { value: "3" } });
    fireEvent["click"](submitButton, {
      bubbles: true,
      cancelable: true,
    });
    const lock = screen.getByTestId("LockOpenIcon");
    expect(lock).toBeInTheDocument();
  });
});

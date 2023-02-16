import { getByText, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Register from "../Register"
describe("Registeration", () => {

test('Should render register component correctly', () => {
    render(<Register />);
    const register =  screen.getByTestId("register");
    expect(register).toHaveTextContent("Registration");    
  });

  test('Should show error message if all fields are not field.', async() => {
    render(<Register />);
    const buttonElement = screen.queryByTestId('submit-button');
    await userEvent.click(buttonElement);
    
    const { getByText } = within(screen.queryByTestId('customer-account-register'));
    expect(getByText('First name is required')).toBeInTheDocument()
    expect(getByText('Last name is required')).toBeInTheDocument()
    
  })

});
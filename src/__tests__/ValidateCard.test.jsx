import { getByText, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ValidateCard from "../ValidateCard"
describe("Validate card", () => {

test('Should contain Validate Card text', () => {
    render(<ValidateCard />);
    const card =  screen.getByTestId("validate");
    expect(card).toHaveTextContent("Validate Card");    
  });

  test('Should show error message if credit score field is empty', async() => {
    render(<ValidateCard />);
    const buttonElement = screen.queryByTestId('submit-button');
    //userEvent
    await userEvent.click(buttonElement);
    
    const { getByText } = within(screen.queryByTestId('creditcard'));
    expect(getByText('Credit score is required')).toBeInTheDocument();    
  })

});
import { render, screen } from "@testing-library/react";
import React from "react";
import Onboarding from "../Onboarding";

describe("get customer address", () => {

test('alt contains correct value', () => {
    render(<Onboarding />);
    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("onboarding");
    //console.log(screen.queryByTestId('unique-id'));
    expect(testImage.src).toContain("CustomerOnboarding.png");    
  });

});
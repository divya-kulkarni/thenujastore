import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Bestsellers } from "../../components/bestseller";
// import userEvent from "@testing-library/user-event";
import React from "react";

describe("Bestsellers", () => {
  it("should be defined", () => {
    expect(Bestsellers).toBeDefined();
  });

  it("loads the bestsellers", () => {
    render(React.createElement(Bestsellers), { wrapper: Router });
    const testText = screen.getByText(/bestsellers/i);
    expect(testText).toBeInTheDocument();
  });

  it("displays product name", () => {
    render(React.createElement(Bestsellers), { wrapper: Router });
    const testText = screen.getByText(/STARDUST EARRINGS/i);
    expect(testText).toBeInTheDocument();
  });

  it("displays product price", async () => {
    render(React.createElement(Bestsellers), { wrapper: Router });
    expect(screen.getByRole("heading", { name: "$17" })).toBeInTheDocument();
  });

  //   it("routes to product page", () => {
  //     const navigate = jest.fn();
  //     render(React.createElement(Bestsellers), { wrapper: Router });
  //     const buttonElement = screen.getByText(/VIEW ALL PRODUCTS/i);
  //     console.log(buttonElement)
  //     userEvent.click(buttonElement);
  //     expect(navigate).toHaveBeenCalledTimes(1);
  //   });
});

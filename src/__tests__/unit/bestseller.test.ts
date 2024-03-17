import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Bestsellers } from "../../components/bestseller";
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

  it("routes to product page", () => {
    render(React.createElement(Bestsellers), { wrapper: Router });
    screen.getByText(/VIEW ALL PRODUCTS/i);
    fireEvent.click(screen.getByText(/VIEW ALL PRODUCTS/i));
    expect(window.location.pathname).toBe("/products");
  });
});

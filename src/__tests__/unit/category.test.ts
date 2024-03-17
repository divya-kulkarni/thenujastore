import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Category } from "../../components/category";
import React from "react";

describe("Category", () => {
  it("should be defined", () => {
    expect(Category).toBeDefined();
  });

  it("loads the category", () => {
    render(React.createElement(Category), { wrapper: Router });
    const testText = screen.getByText(/popular categories/i);
    expect(testText).toBeInTheDocument();
  });

  it("displays correct category names", () => {
    render(React.createElement(Category), { wrapper: Router });
    expect(screen.getByText("RINGS")).toBeInTheDocument();
    expect(screen.getByText("NECKLACES")).toBeInTheDocument();
    expect(screen.getByText("EARRINGS")).toBeInTheDocument();
    expect(screen.getByText("BRACELETS")).toBeInTheDocument();
  });

  it("displays correct images", () => {
    render(React.createElement(Category), { wrapper: Router });
    expect(screen.getByAltText("rings")).toBeInTheDocument();
    expect(screen.getByAltText("necklaces")).toBeInTheDocument();
    expect(screen.getByAltText("earrings")).toBeInTheDocument();
    expect(screen.getByAltText("bracelets")).toBeInTheDocument();
  });

  it("navigates to the correct routes when images are clicked", () => {
    render(React.createElement(Category), { wrapper: Router });
    fireEvent.click(screen.getByAltText("rings"));
    expect(window.location.pathname).toBe("/rings");
    fireEvent.click(screen.getByAltText("necklaces"));
    expect(window.location.pathname).toBe("/necklaces");
    fireEvent.click(screen.getByAltText("earrings"));
    expect(window.location.pathname).toBe("/earrings");
    fireEvent.click(screen.getByAltText("bracelets"));
    expect(window.location.pathname).toBe("/bracelets");
  });
});

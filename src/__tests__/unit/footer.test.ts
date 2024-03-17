import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Footer } from "../../components/footer";


describe("Footer", () => {
  it("should be defined", () => {
    expect(Footer).toBeDefined();
  });

  it("loads the footer", () => {
    render(React.createElement(Footer), { wrapper: Router });
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });

  it("displays the logo", () => {
    render(React.createElement(Footer), { wrapper: Router });
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("navigates to the correct routes when links are clicked", () => {
    render(React.createElement(Footer), { wrapper: Router });
    fireEvent.click(screen.getByText("FAQ"));
    expect(window.location.pathname).toBe("/faq");
    fireEvent.click(screen.getByText("Necklaces"));
    expect(window.location.pathname).toBe("/necklace");
    fireEvent.click(screen.getByText("Earrings"));
    expect(window.location.pathname).toBe("/earrings");
    fireEvent.click(screen.getByText("Bracelets"));
    expect(window.location.pathname).toBe("/bracelet");
    fireEvent.click(screen.getByText("Rings"));
    expect(window.location.pathname).toBe("/rings");
  });
});

import { render, screen } from "@testing-library/react";
import { Hero } from "../../components/hero";
import React from "react";

describe("Hero", () => {
  it("should be defined", () => {
    expect(Hero).toBeDefined();
  });

  it("loads the slide 1 of hero component", () => {
    render(React.createElement(Hero));
    const testText = screen.getByText(/STATEMENT PIECE/i);
    expect(testText).toBeInTheDocument();
  });
  it("loads the slide 2 of hero component", () => {
    render(React.createElement(Hero));
    const testText = screen.getByText(/wearable art/i);
    expect(testText).toBeInTheDocument();
  });

  it("loads the slide 3 of hero component", () => {
    render(React.createElement(Hero));
    const testText = screen.getByText(/big gesture/i);
    expect(testText).toBeInTheDocument();
  });

  it("routes from slide1 to products page", () => {
    render(React.createElement(Hero));
    expect(screen.getByRole("link", { name: /SHOP NOW/i })).toHaveAttribute(
      "href",
      "/products"
    );
  });

  it("routes from slide3 to products page", () => {
    render(React.createElement(Hero));
    expect(screen.getByRole("link", { name: /SEND A GIFT/i })).toHaveAttribute(
      "href",
      "/products"
    );
  });
});

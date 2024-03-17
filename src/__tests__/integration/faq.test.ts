import { FAQ } from "../../pages/faq";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("FAQ", () => {
  it.only("renders the FAQ page", () => {
    render(React.createElement(FAQ), { wrapper: Router });
    // expect(
    //   screen.getByText("ARE THESE PIECES WATERPROOF?")
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByText("DO YOU OFFER INTERNATIONAL SHIPPING?")
    // ).toBeInTheDocument();
    // expect(screen.getByText("WHAT IS YOUR RETURN POLICY")).toBeInTheDocument();
    // expect(screen.getByText("HOW CAN I CONTACT YOU?")).toBeInTheDocument();
  });

  it("renders the navbar", () => {
    render(React.createElement(FAQ), { wrapper: Router });
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});

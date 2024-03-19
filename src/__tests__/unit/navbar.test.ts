import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { NavBar } from "../../components/navbar";
import userEvent from "@testing-library/user-event";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("NavBar", () => {
  it("should be defined", () => {
    expect(NavBar).toBeDefined();
  });

  it("loads the navbar", () => {
    render(React.createElement(NavBar), { wrapper: Router });
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/shop by category/i)).toBeInTheDocument();
    expect(screen.getByText(/collections/i)).toBeInTheDocument();
    expect(screen.getByAltText("shopping cart")).toBeInTheDocument();
  });

  it("displays the logo", () => {
    render(React.createElement(NavBar), { wrapper: Router });
    expect(screen.getByAltText("thenujastore logo")).toBeInTheDocument();
  });

  it("navigates to homepage when HOME is clicked", () => {
    render(React.createElement(NavBar), { wrapper: Router });
    fireEvent.click(screen.getByText("HOME"));
    expect(window.location.pathname).toBe("/");
  });

  it("loads the dropdown", () => {
    render(React.createElement(NavBar), { wrapper: Router });
    const dropdownButton = screen.getByTestId("category");
    userEvent.click(dropdownButton);
    expect(screen.getByText("NECKLACES")).toBeInTheDocument();
    expect(screen.getByText("BRACELETS")).toBeInTheDocument();
    expect(screen.getByText("EARRINGS")).toBeInTheDocument();
    expect(screen.getByText("RINGS")).toBeInTheDocument();
  });
});

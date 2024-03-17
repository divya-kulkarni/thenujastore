import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Suggestions } from "../../components/suggestions";
import React from "react";

describe("Suggestion", () => {
  it("should be defined", () => {
    expect(Suggestions).toBeDefined();
  });

  it("loads the suggestion component", () => {
    render(React.createElement(Suggestions), { wrapper: Router });
    expect(screen.getByText(/YOU MIGHT ALSO LIKE/i)).toBeInTheDocument();
  });

  it("displays the correct number of suggestions", () => {
    render(React.createElement(Suggestions), { wrapper: Router });
    expect(screen.getAllByRole("img").length).toBe(4);
  });

  //   it("navigates to the correct routes when images are clicked", () => {
  //     render(React.createElement(Suggestions), { wrapper: Router });
  //     fireEvent.click(screen.getAllByRole("img")[0]);
  //     expect(window.location.pathname).toBe(/products/);
  //   });
});

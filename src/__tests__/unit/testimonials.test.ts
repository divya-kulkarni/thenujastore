import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Testimonials } from "../../components/testimonials";
import React from "react";

describe("Testimonials", () => {
  it("should be defined", () => {
    expect(Testimonials).toBeDefined();
  });

  it("loads the testimonials", () => {
    render(React.createElement(Testimonials), { wrapper: Router });
    expect(screen.getByText(/from our/i)).toBeInTheDocument();
    expect(screen.getByText(/community/i)).toBeInTheDocument();
  });

  it("loads the first testimonial", () => {
    render(React.createElement(Testimonials), { wrapper: Router });
    const testText = screen.getByText(/Riya/i);
    expect(testText).toBeInTheDocument();
  });

  it("loads left button", () => {
    render(React.createElement(Testimonials), { wrapper: Router });
    const leftButton = screen.getByAltText("left");
    expect(leftButton).toBeInTheDocument();
    fireEvent.click(leftButton);
    expect(screen.getByText('Emily')).toBeInTheDocument();
  });

  it("loads right button", () => {
    render(React.createElement(Testimonials), { wrapper: Router });
    const rightButton = screen.getByAltText("right");
    expect(rightButton).toBeInTheDocument();
    fireEvent.click(rightButton);
    expect(screen.getByText('Alex')).toBeInTheDocument();
  });
});

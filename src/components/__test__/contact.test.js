import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should show heading", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should show button submit", () => {
  render(<Contact />);
  const heading = screen.getByText("Submit");
  expect(heading).toBeInTheDocument();
});

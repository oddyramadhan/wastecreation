import { render, screen } from "@testing-library/react";
import About from "./components/about";

test("about us", () => {
  render(<About />);
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});

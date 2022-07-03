import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Tab from "./components/tab";

test("text blog", () => {
  render(
    <BrowserRouter>
      <Tab />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});

test("button click", () => {
  render(
    <BrowserRouter>
      <Tab />
    </BrowserRouter>
  );
  userEvent.click(screen.getByRole("button", { name: /Blog/i }));
});

import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

test("App renders a button", () => {
  render(<App />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("Clicking the counter button increases the counter", async () => {
  render(<App />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("count is 0");
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  expect(await screen.findByText("count is 1")).toBeInTheDocument();
});

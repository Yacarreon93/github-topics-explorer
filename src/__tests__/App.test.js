import React from "react";
import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

const render = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return rtlRender(ui, { wrapper: Router });
};

test("if App renders correctly", () => {
  render(<App />);
});

test("if Router redirects to Topic Search on a wrong page", () => {
  render(<App />, { route: "/this/page/is/wrong" });

  expect(screen.getByText(/Github Topic Explorer/i)).toBeInTheDocument();
  expect(screen.getByLabelText("Search topic")).toBeInTheDocument();
});

test("if Topic Details page has a button to navigate to Topic Search page and it works", () => {
  render(<App />, { route: "/react" });

  userEvent.click(screen.getByText(/Go topic search/i));

  expect(screen.getByLabelText("Search topic")).toBeInTheDocument();
});

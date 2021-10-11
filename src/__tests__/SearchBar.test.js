import React, { useState } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "../components/Searchbar";

test("if Searchbar renders and initial value is set correctly", () => {
  const initialSearchTerm = "react";

  const { getByLabelText } = render(
    <Searchbar
      term={initialSearchTerm}
      handleTermChange={jest.fn()}
      handleClickOnSearch={jest.fn()}
    />
  );

  expect(getByLabelText("Search topic").value).toEqual("react");
});

test("if Searchbar input changes handler is called correctly", () => {
  let searchTerm = "react";

  const handleTermChange = jest.fn();

  const { getByLabelText } = render(
    <Searchbar
      term={searchTerm}
      handleTermChange={handleTermChange}
      handleClickOnSearch={jest.fn()}
    />
  );

  userEvent.type(getByLabelText("Search topic"), "js");

  expect(handleTermChange).toHaveBeenCalledTimes(2);
});

test("if Searchbar click on Seach handler is called correctly", () => {
  let searchTerm = "react";

  const handleClickOnSearch = jest.fn();

  const { getByText } = render(
    <Searchbar
      term={searchTerm}
      handleTermChange={jest.fn()}
      handleClickOnSearch={handleClickOnSearch}
    />
  );

  userEvent.click(getByText("Search"));

  expect(handleClickOnSearch).toHaveBeenCalledTimes(1);
});

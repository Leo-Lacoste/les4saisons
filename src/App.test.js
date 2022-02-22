import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App, { current } from "./App";
import data from "./data.json";

describe(App.name, () => {
  it("renders the content", () => {
    render(<App />);
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });
  it("renders the actions", () => {
    render(<App />);
    expect(screen.getByTestId("actions")).toBeInTheDocument();
  });
});

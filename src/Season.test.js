import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Season from "./Season";
import data from "./data.json";

let currentSeasonObject;
let date;
let url;

describe(Season.name, () => {
  beforeAll(() => {
    currentSeasonObject = data.saisons[0];
    url = currentSeasonObject.image;
    date = new Date(2022, 1, 9);
    // jest.useFakeTimers("modern");
    // jest.setSystemTime(new Date(2022, 1, 9));
  });
  it("renders a winter image from network", () => {
    render(<Season currentSeason={currentSeasonObject} todayDate={date} />);
    const image = screen.getByAltText("seasonImage");
    expect(image.src).toContain({ url }.url);
  });
  it("renders a title `Hiver`", () => {
    render(<Season currentSeason={currentSeasonObject} todayDate={date} />);
    expect(screen.getByText("Hiver")).toBeInTheDocument();
  });
  it("renders a text `depuis 50 jours`", () => {
    render(<Season currentSeason={currentSeasonObject} todayDate={date} />);
    expect(screen.getByText("depuis 50 jours")).toBeInTheDocument();
  });
});

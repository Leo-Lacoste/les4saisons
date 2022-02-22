import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NextSeason, {
  computeDaysBeforeTheBeginOfTheSeason,
  computeDaysOfTheSeason,
} from "./NextSeason";
import data from "./data.json";

let currentSeasonObject;
let date;
let url;

describe(NextSeason.name, () => {
  beforeAll(() => {
    currentSeasonObject = data.saisons[1];
    url = currentSeasonObject.image;
    date = new Date(2022, 0, 9);
  });
  it("renders a Printemps image from network", () => {
    render(<NextSeason nextSeason={currentSeasonObject} todayDate={date} />);
    const image = screen.getByAltText("nextSeasonImage");
    expect(image.src).toContain({ url }.url);
  });
  it("renders a title `Printemps`", () => {
    render(<NextSeason nextSeason={currentSeasonObject} todayDate={date} />);
    expect(screen.getByText("Printemps")).toBeInTheDocument();
  });
  it("renders a text `92 jours`", () => {
    render(<NextSeason nextSeason={currentSeasonObject} todayDate={date} />);
    expect(screen.getByText("92 jours")).toBeInTheDocument();
  });
  it("renders a text `dans 70 jours`", () => {
    render(<NextSeason nextSeason={currentSeasonObject} todayDate={date} />);
    expect(screen.getByText("dans 70 jours")).toBeInTheDocument();
  });
});

describe("computeDaysOfTheSeason", () => {
  describe("printemps", () => {
    it("returns number of days of winter season", () => {
      const nbDaysOfTheSeason = computeDaysOfTheSeason(data.saisons[0]);
      expect(nbDaysOfTheSeason).toBe(88);
    });
    it("returns number of days of spring season", () => {
      const nbDaysOfTheSeason = computeDaysOfTheSeason(data.saisons[1]);
      expect(nbDaysOfTheSeason).toBe(92);
    });
    it("returns number of days of summer season", () => {
      const nbDaysOfTheSeason = computeDaysOfTheSeason(data.saisons[2]);
      expect(nbDaysOfTheSeason).toBe(93);
    });

    it("returns number of days of automn season", () => {
      const nbDaysOfTheSeason = computeDaysOfTheSeason(data.saisons[3]);
      expect(nbDaysOfTheSeason).toBe(88);
    });
  });
});

describe("computeDaysBeforeTheBeginOfTheSeason", () => {
  describe("printemps", () => {
    beforeAll(() => {
      date = new Date(2022, 1, 9);
      console.log(date);
    });
    it("returns number of days before spring season", () => {
      const daysBegin = computeDaysBeforeTheBeginOfTheSeason(
        data.saisons[1],
        date
      );
      expect(daysBegin).toBe(39);
    });
  });
});

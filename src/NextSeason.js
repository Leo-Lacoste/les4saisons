import React from "react";
import moment from "moment";
import "./NextSeason.css";

function NextSeason({ nextSeason, todayDate }) {
  const nbDaysOfTheSeason = computeDaysOfTheSeason(nextSeason);
  const daysBegin = computeDaysBeforeTheBeginOfTheSeason(nextSeason, todayDate);

  return (
    <div className="NextSeasonRoot">
      <div className="NextSeasonUrl">
        <img
          className="imageNextSeason"
          src={nextSeason.image}
          alt="nextSeasonImage"
        />
      </div>
      <div className="NextSeasonContentText">
        <h1>{nextSeason.nom}</h1>
        <h5>{nbDaysOfTheSeason} jours</h5>
        <p>dans {daysBegin} jours</p>
      </div>
    </div>
  );
}

export function computeDaysOfTheSeason(season) {
  const nextSeasonBeginDate = moment(season.dateDebut, "DD/MM/YYYY");
  const nextSeasonEndDate = moment(season.dateFin, "DD/MM/YYYY");
  return nextSeasonEndDate.diff(nextSeasonBeginDate, "days");
}

export function computeDaysBeforeTheBeginOfTheSeason(season, todayDate) {
  const nextSeasonBeginDate = moment(season.dateDebut, "DD/MM/YYYY");
  return nextSeasonBeginDate.diff(moment(todayDate), "days");
}

export default NextSeason;

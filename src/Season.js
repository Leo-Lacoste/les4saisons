import React from "react";
import "./Season.css";
import moment from "moment";

function Season({ currentSeason, todayDate }) {
  const currentSeasonBeginDate = moment(currentSeason.dateDebut, "DD/MM/YYYY");
  // console.log(currentSeasonBeginDate);
  // console.log(currentSeasonBeginDate.toDate());
  const beginSince = moment(todayDate).diff(currentSeasonBeginDate, "days");

  return (
    <div className="SeasonRoot">
      <div className="SeasonUrl">
        <img
          className="imageSeason"
          src={currentSeason.image}
          alt="seasonImage"
        />
      </div>
      <div className="SeasonContentText">
        <h1>{currentSeason.nom}</h1>
        <p>depuis {beginSince} jours</p>
      </div>
    </div>
  );
}

export default Season;

import { isWithinInterval } from "date-fns";
import React, { lazy, Suspense } from "react";

import Season from "./Season";
import "./App.css";
import data from "./data.json";
import moment from "moment";
import Modal from "./Modal";

const NextSeason = lazy(() => import("./NextSeason"));

function App() {
  const currentDate = new Date();
  const currentDateFormat = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const currentSeasonIndex = data.saisons.map((season, index) => {
    var temp = new Date(season.dateDebut);
    var dateDebutFormat = moment(season.dateDebut, "DD/MM/YYYY").toDate();
    var dateFinFormat = moment(season.dateFin, "DD/MM/YYYY").toDate();

    if (
      isWithinInterval(currentDateFormat, {
        start: new Date(
          dateDebutFormat.getFullYear(),
          dateDebutFormat.getMonth(),
          dateDebutFormat.getDate()
        ),
        end: new Date(
          dateFinFormat.getFullYear(),
          dateFinFormat.getMonth(),
          dateFinFormat.getDate()
        ),
      })
    ) {
      //setSaisonActuelle(season.nom);
      //return season.nom;
      return index;
      console.log("Nous sommes en " + season.nom);
    }
    return null;
    //console.log(dateFormat);
    //console.log(temp.getMonth());
  });

  const currentSeasonObject =
    data.saisons[currentSeasonIndex.filter((index) => index != null)[0]];
  // console.log(currentSeasonObject);

  const nextSeason = data.saisons.filter(
    (saison) => saison.nom === currentSeasonObject.next
  )[0];
  // console.log(nextSeason);

  return (
    <div className="AppRoot">
      <main className="AppMain">
        <div className="AppContent" data-testid="content">
          <Season
            currentSeason={currentSeasonObject}
            todayDate={currentDateFormat}
          />
        </div>
        <div className="AppActions" data-testid="actions">
          <Modal>
            <Suspense fallback={<div>Loading...</div>}>
              <NextSeason
                nextSeason={nextSeason}
                todayDate={currentDateFormat}
              />
            </Suspense>
          </Modal>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {

  return (
    <div>
      <h1>Cognizant Academy Cohorts</h1>

      <CohortDetails
        name="React Cohort"
        status="ongoing"
        startDate="01-07-2026"
        endDate="30-08-2026"
      />

      <CohortDetails
        name="Java Cohort"
        status="completed"
        startDate="01-05-2026"
        endDate="30-06-2026"
      />

    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

function App() {

  const officeList = [
    {
      Name: "Tech Park",
      Rent: 55000,
      Address: "Bhubaneswar"
    },
    {
      Name: "Cyber Tower",
      Rent: 75000,
      Address: "Hyderabad"
    },
    {
      Name: "Business Hub",
      Rent: 45000,
      Address: "Bangalore"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src="/office.jpg"
        alt="Office Space"
        width="400"
        height="250"
      />

      <hr />

      {officeList.map((office, index) => (
        <div key={index} className="office">

          <h2>{office.Name}</h2>

          <p>
            <b>Rent :</b>

            <span
              style={{
                color: office.Rent < 60000 ? "red" : "green"
              }}
            >
              ₹ {office.Rent}
            </span>

          </p>

          <p>
            <b>Address :</b> {office.Address}
          </p>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;

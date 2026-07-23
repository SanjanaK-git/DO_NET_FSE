import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";


function EmployeeCard({ employee }) {

  const theme = useContext(ThemeContext);


  return (
    <div>

      <h3>
        Employee Name: {employee.name}
      </h3>

      <p>
        Designation: {employee.designation}
      </p>


      <button className={theme}>
        Edit
      </button>


      <button className={theme}>
        Delete
      </button>


    </div>
  );
}

export default EmployeeCard;

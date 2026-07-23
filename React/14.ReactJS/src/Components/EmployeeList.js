import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {

  const employees = [
    {
      id: 1,
      name: "John",
      designation: "Developer"
    },
    {
      id: 2,
      name: "Smith",
      designation: "Tester"
    },
    {
      id: 3,
      name: "David",
      designation: "Manager"
    }
  ];


  return (
    <div>

      <h2>Employee List</h2>

      {
        employees.map((employee) => (
          
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />

        ))
      }

    </div>
  );
}

export default EmployeeList;

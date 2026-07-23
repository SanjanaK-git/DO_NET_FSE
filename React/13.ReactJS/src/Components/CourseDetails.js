import React from "react";

function CourseDetails() {

  const courses = [
    {
      id:1,
      name:"React",
      duration:"3 Months"
    },
    {
      id:2,
      name:"Java",
      duration:"4 Months"
    },
    {
      id:3,
      name:"Python",
      duration:"2 Months"
    }
  ];


  function displayCourse(course){

    if(course.duration){
      return (
        <li key={course.id}>
          {course.name} - {course.duration}
        </li>
      );
    }

  }


  return (
    <div>

      <h2>Course Details</h2>

      <ul>
        {
          courses.map(displayCourse)
        }
      </ul>

    </div>
  );
}

export default CourseDetails;

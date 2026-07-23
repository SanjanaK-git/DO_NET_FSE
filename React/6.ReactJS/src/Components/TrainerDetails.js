import React from "react";
import { useParams } from "react-router-dom";
import trainers from "../TrainersMock";

function TrainerDetails() {
  const { id } = useParams();

  const trainer = trainers.find(
    (t) => t.TrainerId === parseInt(id)
  );

  if (!trainer) {
    return <h3>Trainer Not Found</h3>;
  }

  return (
    <div>
      <h2>Trainer Details</h2>

      <p><b>Trainer ID:</b> {trainer.TrainerId}</p>
      <p><b>Name:</b> {trainer.Name}</p>
      <p><b>Email:</b> {trainer.Email}</p>
      <p><b>Phone:</b> {trainer.Phone}</p>
      <p><b>Technology:</b> {trainer.Technology}</p>
      <p><b>Skills:</b> {trainer.Skills}</p>
    </div>
  );
}

export default TrainerDetails;

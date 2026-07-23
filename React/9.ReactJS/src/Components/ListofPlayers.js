import React from "react";

function ListofPlayers() {

  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 85 },
    { name: "Gill", score: 72 },
    { name: "Rahul", score: 68 },
    { name: "Pant", score: 95 },
    { name: "Hardik", score: 60 },
    { name: "Jadeja", score: 75 },
    { name: "Ashwin", score: 65 },
    { name: "Shami", score: 80 },
    { name: "Bumrah", score: 55 },
    { name: "Siraj", score: 70 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      {players.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}

      <h2>Players with Score below 70</h2>

      {below70.map((player, index) => (
        <p key={index}>
          {player.name} - {player.score}
        </p>
      ))}
    </div>
  );
}

export default ListofPlayers;

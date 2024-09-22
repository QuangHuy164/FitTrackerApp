import './App.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerDashboard = ({ playerId }) => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const response = await axios.get(`/api/player/${playerId}`);
      setPlayerData(response.data);
    };
    fetchPlayerData();
  }, [playerId]);

  if (!playerData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{playerData.name}</h1>
      <p>Goals: {playerData.goals}</p>
      <p>Minutes Played: {playerData.minutes}</p>
      <p>Injury Status: {playerData.injury_status}</p>
      <p>Heart Rate: {playerData.fitness.heartRate}</p>
      <p>Calories Burned: {playerData.fitness.caloriesBurned}</p>
    </div>
  );
};

export default PlayerDashboard;


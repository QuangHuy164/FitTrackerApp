import { useState, useEffect } from "react";
import axios from "axios";
import List from "../src/components/list/list.components";
import "./App.css";
import SearchBar from "../src/components/search-bar/search-bar";
import DropDown from "./components/drop-down-menu/drop-down-menu";

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
  
}))

app.use(express.json())

const App = () => {
  const [players, setPlayers] = useState([]); // Renamed player to players
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  // Fetch player data from the correct endpoint
  useEffect(() => {
    axios.get("https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/")
      .then((response) => {
        setPlayers(response.data.elements); // 'elements' contains player data in bootstrap-static API
        console.log(response.data.elements); // Check the structure of the response
      })
      .catch((error) => {
        console.error("Error fetching FPL data:", error); // Add error handling
      });
  }, []);

  // Update filtered players when players data is fetched
  useEffect(() => {
    setFilteredPlayers(players);
  }, [players]);

  // Handle input change to filter players
  const handleInputChange = (event) => {
    const inputName = event.target.value.toLowerCase();
    setFilteredPlayers(
      players.filter(({ web_name }) => 
        web_name.toLowerCase().includes(inputName) // Use web_name from FPL API
      )
    );
  };

  // Sort players by name
  const sortByName = () => {
    const sorted = [...filteredPlayers].sort((a, b) =>
      a.web_name.localeCompare(b.web_name) // Sorting by web_name alphabetically
    );
    setFilteredPlayers(sorted); // Set sorted players
  };

  return (
    <div className="App">
      <h1>Players</h1>
      <SearchBar handleInputChange={handleInputChange}></SearchBar>
      <DropDown sortByName={sortByName}></DropDown>
      <List players={filteredPlayers} />
    </div>
  );
};

export default App;

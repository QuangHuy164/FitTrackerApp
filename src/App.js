import { useState, useEffect } from "react";
import axios from "axios";
import List from "../src/components/list/list.components"
import "./App.css";
import SearchBar from "../src/components/search-bar/search-bar"
import DropDown from "./components/drop-down-menu/drop-down-menu"

const App = () => {
  const [player, setPlayer] = useState([]);
  const [filteredPlayer, setFilteredPlayer] = useState([]);

  useEffect(() => {
    axios.get("https://fantasy.premierleague.com/api/entry/{team-id}")
      .then((response) => {setPlayer(response.data.data)
      console.log(response)});
  }, []);

  useEffect(()=>{
    setFilteredPlayer(player);
  },[player])

  const handleInputChange = (event) => {
    const inputName = event.target.value.toLowerCase();
    setFilteredPlayer(
      player.filter(({displayName}) => displayName.toLowerCase().includes(inputName))
    );
  };

  const sortByName = () => {
    const sorted = filteredPlayer.sort();
    console.log(sorted)
  }

  return (
    <div className="App">
      <h1>Players</h1>
      <SearchBar handleInputChange={handleInputChange}></SearchBar>
      <DropDown sortByName={sortByName}></DropDown>
      <List player={filteredPlayer} />
    </div>
  );
};

export default App;


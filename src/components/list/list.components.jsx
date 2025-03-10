import "./list.styles.css";
import Card from "../player-card/player.card.components";

const List = ({ players }) => {
  // Add a null/undefined check for players
  if (!players || players.length === 0) {
    return <div>No players found</div>;  // Render a message if no players are available
  }

  return (
    <div className="card-list">
      {players.map((player) => {
        return <Card player={player} key={player.id} />; // Use player.id or any unique identifier
      })}
    </div>
  );
};

export default List;

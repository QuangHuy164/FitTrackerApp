import "./list.styles.css";
import Card from "../player-card/player.card.components"

const List = ({player}) => {
  return (
    <div className="card-list">
      {player.map((player) => {
        return <Card player={player} key={player.uuid}/>;
      })}
    </div>
  );
};

export default List;
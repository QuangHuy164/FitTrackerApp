
import "./player.card.styles.css";

const Card = ({ player }) => {
  const {
    uuid,
    displayName,
    description,
    bustPortrait,
    isPlayableCharacter,
    background
  } = player;

  return isPlayableCharacter === true ? (
    <div
      className="player-card"
      key={uuid}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img alt={`Player ${displayName}`} src={bustPortrait} />
      <h3 className="player-name">{displayName}</h3>
      <p>{description}</p>
    </div>
  ) : (
    <></>
  );
};

export default Card;

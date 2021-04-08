
export const GamePin = ({cover,name}) => {
  
  return (
    <div className="games_pin" >
        <h3 className="game__title" >{name}</h3>
        <img className="game__cover" src={cover} alt="cover" />
    </div>
  );
}

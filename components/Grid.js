import { useEffect, useState } from "react";
import { GamePin } from "./GamePin";

export const Grid = () => {
  const [gamesList, setGamesList] = useState(null);
  const [coversList, setCoversList] = useState(null);
  // TODO: Hacer un array de objetos del tipo { game: nombreDelJuego, cover: URLdeLaImagenDelJuego }

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=20&page=2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        return setGamesList(data.results);
        
      });
  }, []);

  return (
    <div className="games_pin-container">
      {gamesList &&
        gamesList.map((game) => (
          <GamePin key={game.id} cover={game.background_image} name={game.name}/>
        ))}
    </div>
  );
};

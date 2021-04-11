import { useEffect, useState } from "react";
import { GamePin } from "./GamePin";
import MasonryLayout from "./MasonryLayout";

export const Grid = () => {
  const [gamesList, setGamesList] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Trae de la API juegos con un máximo de 20 por página.
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=10&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        return setGamesList(data.results);
      });
  }, [pageNumber]);

  return (
    <div className="games__pin_container">
      <MasonryLayout columns={3} gap={7}>
        {gamesList &&
          gamesList.map((game) => (
            <GamePin
              key={game.id}
              game={game}
            />
          ))}
      </MasonryLayout>
    </div>
  );
};

import { useEffect, useState } from "react";
import { GamePin } from "./GamePin";
import MasonryLayout from "./MasonryLayout";
import Loading from "../Assets/puff.js";


export const Grid = () => {
  const [loading, setLoading] = useState(true);
  const [gamesList, setGamesList] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Trae de la API juegos con un máximo de 10 por página.
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=10&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        return setGamesList(data.results);
      });
  }, [pageNumber]);

  return (
    <>
      {!loading ? (
        <div className="games__pin_container">
          <MasonryLayout columns={3} gap={7}>
            {gamesList &&
              gamesList.map((game) => <GamePin key={game.id} game={game} />)}
          </MasonryLayout>
          <button onClick={() => setPageNumber(pageNumber - 1)}>
            Prev Page
          </button>
          <button
            onClick={() => {
              setLoading(true);
              setPageNumber(pageNumber + 1);
              setLoading(false);
            }}
          >
            Next Page
          </button>
        </div>
      ) : (
        <div className="loading"> <Loading/> </div>
      )}
    </>
  );
};

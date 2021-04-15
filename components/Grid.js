import { useEffect, useState } from "react";
import { GamePin } from "./GamePin";
import MasonryLayout from "./MasonryLayout";
import Loading from "../Assets/puff.js";

export const Grid = () => {
  const [loading, setLoading] = useState(true);
  const [gamesList, setGamesList] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Trae de la API juegos con un máximo de 10 por página. RAFACTORIZAR
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=15&page=${pageNumber}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        return setGamesList(data.results);
      });
  }, [pageNumber]);

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <>
      {!loading ? (
        <div className="games__pin_container">
          <MasonryLayout columns={3} gap={7}>
            {gamesList &&
              gamesList.map((game) => <GamePin key={game.id} game={game} />)}
          </MasonryLayout>
          <button
            className={pageNumber <= 1 ? "btn-disabled" : "btn"}
            disabled={pageNumber <= 1}
            onClick={prevPage}
          >
            Prev Page
          </button>
          <button
            className="btn"
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Next Page
          </button>
        </div>
      ) : (
        <div className="loading">
          {" "}
          <Loading />{" "}
        </div>
      )}
    </>
  );
};

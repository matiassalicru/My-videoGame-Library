import { useEffect, useState } from "react";
import { GamePin } from "./GamePin";
import MasonryLayout from "./MasonryLayout";
import Loading from "../Assets/puff.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesList } from "../store/actions/gameAction";

export const Grid = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.game.games);
  const loading = useSelector((state) => state.search.loading);

  // Trae de la API juegos con un máximo de 10 por página. RAFACTORIZAR
  useEffect(() => {
    dispatch(fetchGamesList(pageNumber));
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
          <MasonryLayout columns={3} gap={2}>
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
          <Loading />
        </div>
      )}
    </>
  );
};

import { useEffect, useState } from "react";
import { GamePin } from "./GamePin";
import MasonryLayout from "./MasonryLayout";
import Loading from "../Assets/puff.js";
import {useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { previousPage, nextPage } from "../store/actions/gameAction";


const Grid = ({gamesList}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.game.pageNumber);
  const loading = useSelector((state) => state.search.loading);

  // console.log(data);
  // console.log(gamesList);

  // Trae de la API juegos con un máximo de 10 por página. RAFACTORIZAR
  useEffect(() => {
    router.push(`/games/${pageNumber}`)
  }, [pageNumber]);

  const prevPage = () => {
    if (pageNumber > 1) {
      dispatch(previousPage())
    }
  };

  const nextPages = () => {
    dispatch(nextPage())
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
            onClick={nextPages}
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


export default Grid
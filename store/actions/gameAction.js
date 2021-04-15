import { types } from "../types";
import { loading, NotLoading } from "./searchAction";

export const fetchGame = (id) => async (dispatch) => {
  fetch(`
    https://api.rawg.io/api/games/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.getGame,
        payload: data,
      });
    });
};

export const fetchGamesList = (pageNumber) => async (dispatch) => {
  dispatch(loading());
  fetch(
    `https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=15&page=${pageNumber}`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(NotLoading());
      dispatch({
        type: types.setGames,
        payload: data.results,
      });
    });
};

export const cleanUp = () => {
  return {
    type: types.cleanGame,
  };
};

import { types } from "../types";
import { loading, NotLoading } from "./searchAction";

export const fetchGame = (id) => async (dispatch) => {
  fetch(`
    http://localhost:4000/game/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      dispatch({
        type: types.getGame,
        payload: data,
      });
    });
};

export const fetchGamesList = (pageNumber) => async (dispatch) => {
  dispatch(loading());
  console.log(pageNumber);
  fetch(`http://localhost:4000/games/${pageNumber}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      dispatch(NotLoading());
      dispatch({
        type: types.setGames,
        payload: data.results,
      });
    });
};

// export const fetchGamesList = (pageNumber) => async (dispatch) => {
//   dispatch(loading());
//   fetch(
//     `https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=15&page=${pageNumber}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       dispatch(NotLoading());
//       dispatch({
//         type: types.setGames,
//         payload: data.results,
//       });
//     });
// };

export const cleanUp = () => {
  return {
    type: types.cleanGame,
  };
};


export const nextPage = () => {
  return {
    type: types.nextPage,
  }
}

export const previousPage = () => {
  return {
    type: types.previousPage,
  }
}
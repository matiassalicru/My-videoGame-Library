import { types } from "../types";

export const fetchGame = (id) => async (dispatch) => {
  fetch(`
    https://api.rawg.io/api/games/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: types.getGame,
        payload: data
      })
    });
};

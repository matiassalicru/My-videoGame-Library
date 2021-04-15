import { types } from "../types";

export const searchGame = (search) => async (dispatch) => {
  dispatch(loading());

  fetch(
    `https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=20&search=${search}`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.searchGame,
        payload: data.results,
      });
      dispatch(NotLoading());
    });
};

export const cleanSearch = () => {
  return {
    type: types.cleanSearch,
  };
};

export const loading = () => {
  return {
    type: types.isLoading,
  };
};

export const NotLoading = () => {
  return {
    type: types.isNotLoading,
  };
};

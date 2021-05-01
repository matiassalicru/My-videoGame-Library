import { types } from "../types";

const initialState = {
  games: null,
  game: null,
  pageNumber: 1
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getGame:
      return {
        ...state,
        game: action.payload,
      };

    case types.setGames:
      return {
        ...state,
        games: action.payload,
      };

    case types.cleanGame:
      return {
        ...state,
        game: {},
      };

    case types.nextPage:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      }

    case types.previousPage:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
      }

    default:
      return state;
  }
};

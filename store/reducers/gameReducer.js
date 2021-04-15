import { types } from "../types";

const initialState = {
  games: null,
  game: null,
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

    default:
      return state;
  }
};

import { types } from "../types";

export const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case types.getGame:
      return {
        ...state,
        game: action.payload.name,
        description: action.payload.description,
        cover: action.payload.background_image,
        release_date: action.payload.released
      };

    case types.cleanGame:
      return {};

    default:
      return state;
  }
};

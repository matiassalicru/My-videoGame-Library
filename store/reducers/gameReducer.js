import {types} from "../types";

const initialState = {
  game: "",
  description: "",
  cover: "",
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getGame:
      return {
        ...state,
        game: action.payload.name,
        description: action.payload.description,
        cover: action.payload.background_image
      };

    default:
      return state;
  }
};

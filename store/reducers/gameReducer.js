import {types} from "../types";

const initialState = {
  game: "",
  cover: "",
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getGame:
      return {
        ...state,
        game: action.payload.name,
        cover: action.payload.description,
      };

    default:
      return state;
  }
};

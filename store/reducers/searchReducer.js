import { types } from "../types";

const initialState = {
  loading: false,
  results: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.searchGame:
      return {
        ...state,
        results: action.payload,
      };

    case types.isLoading:
      return {
        ...state,
        loading: true,
      };

    case types.isNotLoading:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

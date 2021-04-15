import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { searchReducer } from "./searchReducer";

export default combineReducers({
  game: gameReducer,
  search: searchReducer,
});

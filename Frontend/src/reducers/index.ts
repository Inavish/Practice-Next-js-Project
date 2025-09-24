// src/store/reducers/index.ts
import { combineReducers } from "redux";
import { todoReducer } from "./toDoReducer";

const rootReducer = combineReducers({
  todos: todoReducer

});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

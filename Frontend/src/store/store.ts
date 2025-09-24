import { createStore } from "redux";
import rootReducer from "../reducers"; // Import combined reducers

// Create Redux store
export const store = createStore(
  rootReducer,
  // Enable Redux DevTools Extension in browser
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || undefined
);

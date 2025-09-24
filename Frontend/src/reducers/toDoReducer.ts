// // State type
interface TodoState {
//   list: Todo[];
}

// Action type
interface Action {
  type: string;
  payload?: any;
}

// Initial state
const initialState: TodoState = {
  list: [],
};
export const todoReducer = (state = initialState, action: Action):TodoState=>{
    return {}

}
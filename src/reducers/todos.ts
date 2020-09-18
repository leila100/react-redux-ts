import { Todo, FetchTodosActions } from "../actions/index";
import { ActionTypes } from "../actions/actionTypes";

const initialState: Todo[] = [];

export const todosReducer = (state: Todo[] = initialState, action: FetchTodosActions) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    default:
      return state;
  }
};

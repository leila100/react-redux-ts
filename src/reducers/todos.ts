import { Todo, Action, ActionTypes } from "../actions/index";

const initialState: Todo[] = [];

export const todosReducer = (state: Todo[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

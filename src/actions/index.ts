import axios from "axios";
import { Dispatch } from "redux";

import { ActionTypes } from "./actionTypes";

const url = "http://jsonplaceholder.typicode.com/todos";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosActions {
  type: ActionTypes.fetchTodos;
  todos: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosActions>({ type: ActionTypes.fetchTodos, todos: response.data });
  };
};

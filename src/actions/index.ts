import axios from "axios";
import { Dispatch } from "redux";

import { ActionTypes } from "./actionTypes";

const url = "http://jsonplaceholder.typicode.com/todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosActions {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosActions>({ type: ActionTypes.fetchTodos, payload: response.data });
  };
};

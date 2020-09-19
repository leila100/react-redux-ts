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

export interface DeleteTodoActions {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosActions>({ type: ActionTypes.fetchTodos, payload: response.data });
  };
};

export const deleteTodo = (todoId: number): DeleteTodoActions => {
  return { type: ActionTypes.deleteTodo, payload: todoId };
};

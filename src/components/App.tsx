import * as React from "react";
import { connect } from "react-redux";

import { Todo, fetchTodos } from "../actions/index";
import { StoreState } from "../reducers/index";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

const _App = ({ todos, fetchTodos }: AppProps): JSX.Element => {
  React.useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);

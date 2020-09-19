import * as React from "react";
import { connect } from "react-redux";

import { Todo, fetchTodos, deleteTodo } from "../actions/index";
import { StoreState } from "../reducers/index";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function; //Can't put :typeof fetchTodos because it uses Thunk
  deleteTodo: typeof deleteTodo;
}

const _App = ({ todos, fetchTodos, deleteTodo }: AppProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (todos.length > 0) setLoading(false);
  }, [todos]);

  const onClickFetch = (): void => {
    setLoading(true);
    fetchTodos();
  };

  const onclickTodo = (id: number): void => {
    deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => (
      <div key={todo.id} onClick={() => onclickTodo(todo.id)}>
        {todo.title}
      </div>
    ));
  };

  return (
    <>
      <button onClick={onClickFetch}>Fetch</button>
      {loading ? <div>Loading...</div> : renderList()}
    </>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos,
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

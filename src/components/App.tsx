import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Todo, fetchTodos } from "../actions/index";
import { StoreState } from "../reducers/index";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  const todos: Todo[] = useSelector<StoreState, Todo[]>((state) => state.todos);

  React.useEffect(() => {
    fetchTodos()(dispatch);
  }, [dispatch]);

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};

export default App;

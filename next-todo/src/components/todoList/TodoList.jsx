import { useContext, useState } from "react";
import { MainContext } from "@/store";
import styles from "./index.module.scss";
import TodoItem from "../todoItem";

const TodoList = () => {
  const { state, dispatch } = useContext(MainContext);
  const [input, setInput] = useState("");

  const onHandleInput = (e) => setInput(e.target.value);
  const onSetNewTodo = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_NEW_TODO",
      payload: {
        id: Math.floor(Math.random() * 1000000),
        content: input,
        completed: false,
      },
    });

    setInput("");
  };

  return (
    <div className={styles.TodoList}>
      <div className={styles.heading}>
        <h1>All Todos</h1>
        <form className={styles.input} onSubmit={onSetNewTodo}>
          <input
            type="text"
            name="content"
            value={input}
            onChange={onHandleInput}
            placeholder="Add new..."
          />
          <input className={styles.addBtn} type="submit" value="+" />
        </form>
      </div>
      {state?.todos?.map((todo, i) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;

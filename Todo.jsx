import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTodo() {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });

    setNewTodo("");
  }
  function updateTodo(event) {
    setNewTodo(event.target.value);
  }
  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id != id),
    );
  };
  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      }),
    );
  };
  let markDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };
  return (
    <div className="card">
      <div id="center">
        <input
          placeholder="add a task"
          value={newTodo}
          onChange={updateTodo}
          className="input"
        />
        <button className="counter" onClick={addNewTodo}>
          Add Task
        </button>
        <hr style={{ width: "60%" }} />

        <h3>Tasks todo</h3>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <span
                  style={todo.isDone ? { textDecoration: "line-through" } : {}}
                >
                  {todo.task}
                </span>
                &nbsp;&nbsp;&nbsp;
                <button className="counter" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
                &nbsp;&nbsp;&nbsp;
                <button className="counter" onClick={() => markDone(todo.id)}>
                  Mark As Done
                </button>
              </li>
            );
          })}
        </ul>
        <button className="counter" onClick={markAllDone}>
          Mark All Done
        </button>
      </div>
    </div>
  );
}

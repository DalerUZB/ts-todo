import React, { useEffect, useState } from "react";
import Todo from "./Components/Todos";
import "./App.css";

const App: React.FC = () => {
  interface DataInterface {
    name: string;
    isCompleted: boolean;
    id: number;
  }

  const [todos, setTodos] = useState<DataInterface[]>([]);
  const [todoValue, setTodoValue] = useState<string>("");

  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const getKeyTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const value = (e.target as HTMLInputElement).value;
    setTodoValue(value);
  };

  const handleAddTodo = (str: string): void => {
    const newStr = str.trim();

    if (newStr.length !== 0) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { name: str, isCompleted, id: prevTodos.length + 1 },
      ]);
      setTodoValue("");
    }
  };

  const doneFunc = (valBol: boolean, idTodo: number): void => {
    setTodos((prewTodo) =>
      prewTodo.map((item) => {
        return item.id === idTodo ? { ...item, isCompleted: valBol } : item;
      })
    );
  };

  const onChangefuncTodo = (param: number, changeNameTodo: string): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === param ? { ...todo, name: changeNameTodo } : todo
      )
    );
  };

  const deleteTodo = (param: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== param));
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <div className="inputContainer">
        <input
          onKeyDown={getKeyTodo}
          type="text"
          placeholder="What are your plans?"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className="input"
        />
        <button className="addButton" onClick={() => handleAddTodo(todoValue)}>
          Submit
        </button>
      </div>
      <div className="todoList">
        {todos.map((itemTodo, index) => (
          <Todo
            key={itemTodo.id + 1}
            todo={itemTodo}
            doneFunc={doneFunc}
            onChangefuncTodo={onChangefuncTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

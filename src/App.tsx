// import React from "react";
// import Todo from "./Components/Todos";
// import "./App.css";
// import { useSelector } from "react-redux";
// import { RootState } from "./Redux/Store";
// import { useDispatch } from "react-redux";
// import { addTodo } from "./Redux/Slice";

// const App: React.FC = () => {
//   const [todoValue, setTodoValue] = React.useState<string>("");
//   const [isComplated, setIsComplated] = React.useState<boolean>(false);
//   const { todo } = useSelector((state: RootState) => state.todos);
//   const dispatch = useDispatch();

//   const getKeyTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
//     if (e.key === "13") {
//       handleAddTodo(todoValue);
//     }
//     const value = (e.target as HTMLInputElement).value;
//     setTodoValue(value);
//   };

//   const handleAddTodo = (txt: string): void => {
//     const infoTodo = {
//       todo: txt,
//       isComplated,
//       id: todo.length + 1,
//     };
//     if (txt.trim() !== "") {
//       dispatch(addTodo(infoTodo));
//     }
//   };

//   interface TodoItemProps {
//     item: typeof todo; // item - Todo tipidagi o'zgaruvchi
//   }

//   return (
//     <div className="container">
//       <h1 className="title">To-Do List</h1>
//       <div className="inputContainer">
//         <input
//           onKeyDown={(e) => getKeyTodo(e)}
//           type="text"
//           placeholder="What are your plans?"
//           className="input"
//         />
//         <button className="addButton" onClick={() => handleAddTodo(todoValue)}>
//           Submit
//         </button>
//       </div>
//       <div className="todoList">
//         {todo.map((todos) => (
//           <Todo todos={todos} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Todo from "./Components/Todos";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Redux/Store";
import { addTodo } from "./Redux/Slice";
import { string } from "prop-types";

const App: React.FC = () => {
  const [todoValue, setTodoValue] = React.useState<string>("");
  const [isComplated, setIsComplated] = React.useState<boolean>(false);
  const todos = useSelector((state: RootState) => state.todos.todo); // Faqat 'todo'ni olish
  const dispatch = useDispatch();

  // Inputdan key pressed bo'lsa, yangi todo qo'shish
  const getKeyTodo = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleAddTodo(todoValue);
    }
    const value = (e.target as HTMLInputElement).value;
    setTodoValue(value);
  };

  // Todo qo'shish uchun funksiya
  const handleAddTodo = (txt: string): void => {
    const infoTodo = {
      todo: txt,
      isComplated,
      id: todos.length + 1, // Avvalgi todos uzunligini olish
    };
    if (txt.trim() !== "") {
      dispatch(addTodo(infoTodo)); // Redux actionni chaqirish
      setTodoValue(""); // Qo'shilgan todo qiymatini tozalash
    }
  };

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <div className="inputContainer">
        <input
          onKeyDown={(e) => getKeyTodo(e)} // Keydown hodisasi
          type="text"
          placeholder="What are your plans?"
          value={todoValue} // Stateni inputga ulash
          onChange={(e) => setTodoValue(e.target.value)} // State o'zgartirish
          className="input"
        />
        <button className="addButton" onClick={() => handleAddTodo(todoValue)}>
          Submit
        </button>
      </div>
      <div className="todoList">
        {todos.map((todo) => (
          <Todo /> // Unique keyni qo'yish
        ))}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { MdDone, MdDoneAll } from "react-icons/md";

interface TodoComponent {
  name: string;
  isCompleted: boolean;
  id: number;
}

type TodoStateAll = {
  todo: TodoComponent;
  doneFunc: (value: boolean, idTodo: number) => void;
  deleteTodo: (param: number) => void;
  onChangefuncTodo: (param: number, changeNameTodo: string) => void;
};

const Todo: React.FC<TodoStateAll> = ({
  todo,
  doneFunc,
  deleteTodo,
  onChangefuncTodo,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(true);
  const [newName, setNewName] = useState<string>(todo.name);

  function onEditFunc(): void {
    setIsEditing(!isEditing);
  }

  function changeTodo(): void {
    if (newName !== todo.name) {
      onChangefuncTodo(todo.id, newName);
    }
    setIsEditing(false);
  }

  function onDeleteFunc(): void {
    const confirimInspection = confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirimInspection) {
      deleteTodo(todo.id);
    }
  }

  function doneFuncChange(): void {
    const todoId = todo.id;
    setIsDone(!isDone);
    doneFunc(isDone, todoId);
  }

  return (
    <TodoItem isCompleted={todo.isCompleted}>
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <TodoText>{todo.name}</TodoText>
      )}

      <ButtonContainer>
        <EditButton onClick={onEditFunc}>
          <FaEdit />
        </EditButton>
        {isEditing && <SaveButton onClick={changeTodo}>Save</SaveButton>}
        <DeleteButton onClick={onDeleteFunc}>
          <FaTrashAlt />
        </DeleteButton>
        {todo.isCompleted ? (
          <MdDoneAll onClick={doneFuncChange} />
        ) : (
          <MdDone onClick={doneFuncChange} />
        )}
      </ButtonContainer>
    </TodoItem>
  );
};

// Styled Components with Props
interface TodoItemProps {
  isCompleted: boolean;
}

const TodoItem = styled.div<TodoItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  opacity: ${(props) => (props.isCompleted ? "0.5" : "1")};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  position: relative;
  max-width: 100%;
  transition: 0.5s;

  &:hover {
    background-color: #f4f4f4;
  }

  @media (max-width: 575px) {
    padding: 8px;
    margin-bottom: 8px;
  }
`;

const TodoText = styled.span`
  font-size: 20px;
  color: #333;
  word-wrap: break-word;
  flex-grow: 1;
  padding-right: 10px;
  line-height: 1.5;
  overflow: hidden;
  padding: 20px;
  margin-bottom: 20px;

  word-break: break-word;
  white-space: normal;

  @media (max-width: 575px) {
    font-size: 16px;
    padding: 15px;
    margin-bottom: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;

  @media (max-width: 575px) {
    gap: 5px;
    bottom: 8px;
    right: 8px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #777;
  font-size: 20px;

  &:hover {
    color: #333;
  }

  @media (max-width: 575px) {
    font-size: 16px;
  }
`;

const DeleteButton = styled(Button)`
  color: #f44336;
`;

const EditButton = styled(Button)`
  color: #ffa500;
`;

const SaveButton = styled(Button)`
  color: #4caf50;
`;

export default Todo;

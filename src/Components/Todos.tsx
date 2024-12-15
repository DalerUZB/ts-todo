import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Todo: React.FC = () => {
  function onEditFunc(): void {
    console.log("edit func bosildi");
  }
  function onDeleteFunc(): void {
    console.log("delete func bosildi");
  }

  return (
    <TodoItem>
      <TodoText>""</TodoText>
      <ButtonContainer>
        <EditButton onClick={() => onEditFunc()}>
          <FaEdit />
        </EditButton>
        <DeleteButton onClick={() => onDeleteFunc()}>
          <FaTrashAlt />
        </DeleteButton>
      </ButtonContainer>
    </TodoItem>
  );
};

const TodoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  position: relative;
  max-width: 100%; /* Ensures the TodoItem is responsive */

  &:hover {
    background-color: #f4f4f4;
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

  /* Prevents long words from overflowing */

  word-break: break-word;
  white-space: normal;

  @media (max-width: 575px) {
    font-size: 16px; /* Smaller text for smaller screens */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
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
`;

const DeleteButton = styled(Button)`
  color: #f44336;
`;

const EditButton = styled(Button)`
  color: #ffa500;
`;

export default Todo;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Redux/Store';  // RootState importini tekshiring

interface Todo {
    todo: string;
    isComplated: boolean;
    id: number;
}

// TodoState interfeysi
interface TodoState {
    todo: Todo[];
}

// Dastlabki state
const initialState: TodoState = {
    todo: [],
};

// Redux slice yaratish
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todo.push(action.payload);
        },
    },
});

export const { addTodo } = TodoSlice.actions;

export const selectTodos = (state: RootState) => state;

export default TodoSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import { TodoSlice } from './Slice';


export const store = configureStore({
    reducer: {
        todos: TodoSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


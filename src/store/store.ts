import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./slices/todos/todosSlice";
import { txtRecuer } from "./slices/txt/txtSlice";

const store = configureStore({
    reducer:{
        todos:todosReducer,
        txt:txtRecuer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
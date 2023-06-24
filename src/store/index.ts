import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const todoSlide = createSlice({
  name: 'todo',
  initialState: [
    'Learn React',
    'Learn TypeScript',
    'Learn Zustand',
    'Learn Redux Toolkit',
  ],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlide.reducer,
  },
});

export const { add } = todoSlide.actions;

type RootState = ReturnType<typeof store.getState>;

export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;

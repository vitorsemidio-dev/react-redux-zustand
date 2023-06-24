import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlide = createSlice({
  name: 'todo',
  initialState: [
    'Learn React',
    'Learn TypeScript',
    'Learn Zustand',
    'Learn Redux Toolkit',
  ],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSlide.reducer,
  },
});

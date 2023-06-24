import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {},
});

type RootState = ReturnType<typeof store.getState>;

export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;

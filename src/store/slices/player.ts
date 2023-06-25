import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { useAppSelector } from '..';
import { api } from '../../lib/axios';

interface Course {
  id: number;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;
}

const INITIAL_STATE: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: true,
};

export const loadCourse = createAsyncThunk('player/load', async () => {
  const response = await api.get('/courses/1');
  return response.data;
});

export const playerSlice = createSlice({
  name: 'player',
  initialState: INITIAL_STATE,
  reducers: {
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[
          nextLessonIndex
        ];

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else {
        const START_INDEX = 0;
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course?.modules[nextModuleIndex];
        if (nextModule) {
          state.currentLessonIndex = START_INDEX;
          state.currentModuleIndex = nextModuleIndex;
        }
      }
    },
    play: (
      state,
      action: PayloadAction<{ moduleIndex: number; lessonIndex: number }>,
    ) => {
      state.currentModuleIndex = action.payload.moduleIndex;
      state.currentLessonIndex = action.payload.lessonIndex;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const player = playerSlice.reducer;
export const { next, play } = playerSlice.actions;
export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];
    return {
      currentLesson,
      currentModule,
    };
  });
};

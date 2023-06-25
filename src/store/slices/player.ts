import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { useAppSelector } from '..';

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
}

const INITIAL_STATE: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState: INITIAL_STATE,
  reducers: {
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson = state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex];

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
    start: (state, action: PayloadAction<Course>) => {
      state.course = action.payload;
    },
    play: (state, action: PayloadAction<{ moduleIndex: number, lessonIndex: number }>) => {
      state.currentModuleIndex = action.payload.moduleIndex;
      state.currentLessonIndex = action.payload.lessonIndex;
    },
  },
});

export const player = playerSlice.reducer;
export const { next, start, play } = playerSlice.actions;
export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;
    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];
    return {
      currentLesson,
      currentModule,
    }
  });
}
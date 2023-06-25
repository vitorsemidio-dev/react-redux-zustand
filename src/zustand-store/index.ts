import { create } from 'zustand';
import { api } from '../lib/axios';

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

type PlayParams = {
  lessonIndex: number;
  moduleIndex: number;
};

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;
  load: () => Promise<void>;
  next: () => void;
  play: (params: PlayParams) => void;
}

export const useStore = create<PlayerState>((set, get) => ({
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: true,
  load: async () => {
    set({
      isLoading: true,
    });
    const response = await api.get('/courses/1');
    set({
      course: response.data,
      isLoading: false,
    });
  },
  next: () => {
    const { course, currentLessonIndex, currentModuleIndex } = get();
    const nextLessonIndex = currentLessonIndex + 1;
    const nextLesson =
      course?.modules[currentModuleIndex].lessons[nextLessonIndex];

    if (nextLesson) {
      set({
        currentLessonIndex: nextLessonIndex,
      });
    } else {
      const START_INDEX = 0;
      const nextModuleIndex = currentModuleIndex + 1;
      const nextModule = course?.modules[nextModuleIndex];
      if (nextModule) {
        set({
          currentLessonIndex: START_INDEX,
          currentModuleIndex: nextModuleIndex,
        });
      }
    }
  },
  play: ({ moduleIndex, lessonIndex }: PlayParams) => {
    set({
      currentModuleIndex: moduleIndex,
      currentLessonIndex: lessonIndex,
    });
  },
}));

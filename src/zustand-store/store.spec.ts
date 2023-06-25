import { beforeEach, describe, expect, it } from 'vitest';

import { useStore as store } from '.';

const initialState = store.getState();

const course = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
        {
          id: 'w-DW4DhDfcw',
          title: 'Estilização do Post',
          duration: '10:05',
        },
      ],
    },
    {
      id: 2,
      title: 'Estrutura da aplicação',
      lessons: [
        {
          id: 'gE48FQXRZ_o',
          title: 'Componente: Comment',
          duration: '13:45',
        },
        { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
      ],
    },
  ],
};

describe('Zustand Store', () => {
  beforeEach(() => {
    store.setState(initialState);
  });

  describe('Action play', () => {
    it('should be able to play specific lesson', () => {
      const input = { moduleIndex: 1, lessonIndex: 1 };
      const { play } = store.getState();

      play(input);

      const { currentLessonIndex, currentModuleIndex } = store.getState();
      expect(currentModuleIndex).toBe(1);
      expect(currentLessonIndex).toBe(1);
    });
  });

  describe('Action next', () => {
    it('should be able to play next lesson', () => {
      store.setState({ course });
      const { next } = store.getState();

      next();

      const { currentLessonIndex, currentModuleIndex } = store.getState();
      expect(currentModuleIndex).toBe(0);
      expect(currentLessonIndex).toBe(1);
    });

    it('should be able to play next module', () => {
      store.setState({ course, currentLessonIndex: 1 });
      const { next } = store.getState();

      next();

      const { currentLessonIndex, currentModuleIndex } = store.getState();
      expect(currentModuleIndex).toBe(1);
      expect(currentLessonIndex).toBe(0);
    });

    it('should be able to play next lesson when current lesson is the last one', () => {
      store.setState({ course, currentLessonIndex: 1, currentModuleIndex: 0 });
      const { next } = store.getState();

      next();

      const { currentLessonIndex, currentModuleIndex } = store.getState();
      expect(currentModuleIndex).toBe(1);
      expect(currentLessonIndex).toBe(0);
    });

    it('should not update current lesson and module indexes when the the lesson and module are the last one', () => {
      store.setState({ course, currentLessonIndex: 1, currentModuleIndex: 1 });
      const { next } = store.getState();

      next();

      const { currentLessonIndex, currentModuleIndex } = store.getState();
      expect(currentModuleIndex).toBe(1);
      expect(currentLessonIndex).toBe(1);
    });
  });
});

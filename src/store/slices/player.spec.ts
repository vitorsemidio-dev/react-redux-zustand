import { describe, expect, it } from 'vitest';

import { PlayerState, playerSlice, player as reducer } from './player';

const exampleState: PlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
          { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' },
        ],
      },
      {
        id: 2,
        title: 'Estrutura da aplicação',
        lessons: [
          { id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' },
          { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
        ],
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
}

describe('player slice', () => {
  describe('Action play', () => {
    it('should be able to play specific lesson', () => {
      const input = { moduleIndex: 1, lessonIndex: 2 };
  
      const state = reducer(exampleState, playerSlice.actions.play(input));
  
      expect(state.currentModuleIndex).toBe(1);
      expect(state.currentLessonIndex).toBe(2);
    });
  });

  describe('Action next', () => {
    it('should be able to play next lesson', () => {
      const state = reducer(exampleState, playerSlice.actions.next());
  
      expect(state.currentModuleIndex).toBe(0);
      expect(state.currentLessonIndex).toBe(1);
    });
  
    it('should be able to play next module', () => {
      const state = reducer({ ...exampleState, currentLessonIndex: 1 }, playerSlice.actions.next());
  
      expect(state.currentModuleIndex).toBe(1);
      expect(state.currentLessonIndex).toBe(0);
    });
  
    it('should be able to play next lesson when current lesson is the last one', () => {
      const state = reducer({ ...exampleState, currentLessonIndex: 1 }, playerSlice.actions.next());
  
      expect(state.currentModuleIndex).toBe(1);
      expect(state.currentLessonIndex).toBe(0);
    });
  
    it('should not update current lesson and module indexes when the the lesson and module are the last one', () => {
      const state = reducer({ ...exampleState, currentLessonIndex: 1, currentModuleIndex: 1 }, playerSlice.actions.next());
  
      expect(state.currentModuleIndex).toBe(1);
      expect(state.currentLessonIndex).toBe(1);
    });
  });
})
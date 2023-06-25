import { describe, expect, it } from 'vitest';

import { playerSlice, player as reducer } from './player';

describe('player slice', () => {
  it('should be able to play', () => {
    const initialState = playerSlice.getInitialState();
    const input = { moduleIndex: 1, lessonIndex: 2 };

    const state = reducer(initialState, playerSlice.actions.play(input));

    expect(state.currentModuleIndex).toBe(1);
    expect(state.currentLessonIndex).toBe(2);
  })
})
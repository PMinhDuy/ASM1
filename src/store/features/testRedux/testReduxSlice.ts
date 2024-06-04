import type { PayloadAction } from '@reduxjs/toolkit';
import type { TestReduxState } from '../../rootType';
import { createSlice } from '@reduxjs/toolkit';

export const testReduxSlice = createSlice({
  initialState: {
    ability: 'ability initialState',
    berry: 'berry initialState',
  },
  name: 'testRedux',
  reducers: {
    loadTestReduxDataInitial: (state) => {
      state.ability = 'ability initialState';
      state.berry = 'berry initialState';
    },
    loadTestReduxDataSucceeded: (state, action: PayloadAction<TestReduxState>) => {
      state.ability = action.payload.testRedux.ability;
      state.berry = action.payload.testRedux.berry;
    },
  },
});

export const { actions: testReduxAction } = testReduxSlice;

export default testReduxSlice.reducer;

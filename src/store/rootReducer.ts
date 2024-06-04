import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import testReduxReducer from './features/testRedux/testReduxSlice';
import userReducer from './features/users/userSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  testRedux: testReduxReducer,
});

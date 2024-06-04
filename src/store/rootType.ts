import { type store } from './store';

export interface CounterState {
  counter: {
    value: number;
  };
}

export interface UserState {
  user: {
    email: string;
    userName: string;
    password: string;
  };
}

export interface TestReduxState {
  testRedux: {
    ability: string;
    berry: string;
  };
}

export type RootState = ReturnType<typeof store.getState>;

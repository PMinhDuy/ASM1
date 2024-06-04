import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type UserState } from '../../rootType';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: 'phamminhduy191199@gmail.com',
    userName: 'Duy Pham',
    password: 'Duy123',
  },
  reducers: {
    createUser: (state, action: PayloadAction<UserState>) => {
      state.userName = action.payload.user.userName;
      state.password = action.payload.user.password;
      state.email = action.payload.user.email;
    },
  },
});

export const { actions: createUserAction } = userSlice;

export default userSlice.reducer;

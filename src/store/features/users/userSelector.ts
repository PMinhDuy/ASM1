import { type RootState } from '../../rootType';

const userNameSelector = (state: RootState) => state.user.userName;
const emailSelector = (state: RootState) => state.user.email;
const passwordSelector = (state: RootState) => state.user.password;

export { userNameSelector, emailSelector, passwordSelector };

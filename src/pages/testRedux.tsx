import { decrement, decrementByAmount, increment, incrementByAmount } from '../store/features/counter/counterSlice';
import { emailSelector, passwordSelector, userNameSelector } from '../store/features/users/userSelector';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { abilitySelector } from '../store/features/testRedux/testReduxSelector';
import counterSelector from '../store/features/counter/counterSelector';
import { testReduxAction } from '../store/features/testRedux/testReduxSlice';
import { useEffect } from 'react';

function TestRedux() {
  const count = useSelector(counterSelector);
  const userName = useSelector(userNameSelector);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);
  const ability = useSelector(abilitySelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(testReduxAction.loadTestReduxDataInitial());
  }, []);
  return (
    <>
      <h1>React Redux</h1>
      <p>{count}</p>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(incrementByAmount(2))}>Increment By Amount</Button>
      <Button onClick={() => dispatch(decrementByAmount(2))}>Decrement By Amount</Button>

      <Button onClick={() => dispatch(testReduxAction.loadTestReduxDataInitial())}>Load Test Redux</Button>

      <h2>User Information</h2>
      <p>Username: {userName}</p>
      <p>Password: {password}</p>
      <p>Email: {email}</p>
      <br />
      <p>ability Redux: {ability}</p>
    </>
  );
}

export default TestRedux;

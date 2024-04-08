import Page from './pages';
import { useRoutes } from 'react-router-dom';
import TestRedux from './pages/testRedux';
import { PATH_URL } from './shared/ultils/constant';
import SignIn from './pages/signIn';
import NotFoundPage from './pages/[...all]';
import SignUp from './pages/signUp';

function App() {
  const routes = [
    { path: '/', element: <Page /> },
    { path: PATH_URL.signIn, element: <SignIn /> },
    { path: PATH_URL.signUp, element: <SignUp /> },
    { path: '/testRedux', element: <TestRedux /> },
    { path: '*', element: <NotFoundPage /> },
  ];
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;

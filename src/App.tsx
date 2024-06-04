import NotFoundPage from './pages/[...all]';
import { PATH_URL } from './shared/ultils/constant';
import Page from './pages';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import TestRedux from './pages/testRedux';
import { useRoutes } from 'react-router-dom';

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

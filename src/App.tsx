import { Suspense, lazy } from 'react';
import NotFoundPage from './pages/[...all]';
import { PATH_URL } from './shared/ultils/constant';
import Page from './pages';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import { useRoutes } from 'react-router-dom';

const TestRedux = lazy(async () => await import('./pages/testRedux'));

function App() {
  const routes = [
    { path: '/', element: <Page /> },
    { path: PATH_URL.signIn, element: <SignIn /> },
    { path: PATH_URL.signUp, element: <SignUp /> },
    {
      path: '/testRedux',
      element: (
        <Suspense fallback={<div>...Loading</div>}>
          <TestRedux />
        </Suspense>
      ),
    },
    { path: '*', element: <NotFoundPage /> },
  ];
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;

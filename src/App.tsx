import { Suspense, lazy } from 'react';
import NotFoundPage from './pages/[...all]';
import { PATH_URL } from './shared/ultils/constant';
import Page from './pages';
import Login from './pages/login';
import AddUser from './pages/addUser';
import { useRoutes } from 'react-router-dom';
import CategoryDetail from '#/pages/category';

const TestRedux = lazy(async () => await import('./pages/testRedux'));

function App() {
  const routes = [
    { path: PATH_URL.home, element: <Page /> },
    { path: PATH_URL.login, element: <Login /> },
    { path: PATH_URL.register, element: <AddUser /> },
    { path: PATH_URL.category, element: <CategoryDetail /> },
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

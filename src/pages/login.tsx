import React, { Suspense } from 'react';
import MainLayout from '../shared/hocs/MainLayout';

const LoginForm = React.lazy(async () => await import('../features/authentication/components/LoginForm'));

function Login() {
  return (
    <MainLayout>
      <Suspense fallback={<div>...Loading</div>}>
        <LoginForm />
      </Suspense>
    </MainLayout>
  );
}

export default Login;

import React, { Suspense } from 'react';
import MainLayout from '../shared/hocs/MainLayout';

const SignInForm = React.lazy(async () => await import('../features/authentication/components/SignInForm'));

function SignIn() {
  return (
    <MainLayout>
      <Suspense fallback={<div>...Loading</div>}>
        <SignInForm />
      </Suspense>
    </MainLayout>
  );
}

export default SignIn;

import React, { Suspense } from 'react';
import MainLayout from '../shared/hocs/MainLayout';

const SignUpForm = React.lazy(async () => await import('../features/authentication/components/SignUpForm'));

function SignUp() {
  return (
    <MainLayout>
      <Suspense fallback={<div>...Loading</div>}>
        <SignUpForm />
      </Suspense>
    </MainLayout>
  );
}

export default SignUp;

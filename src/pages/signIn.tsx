import MainLayout from '../shared/hocs/MainLayout';
import SignInForm from '../features/authentication/components/SignInForm';

function SignIn() {
  return (
    <MainLayout>
      <SignInForm />
    </MainLayout>
  );
}

export default SignIn;

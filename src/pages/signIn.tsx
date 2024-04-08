import SignInForm from '../shared/components/authentication/SignInForm';
import MainLayout from '../shared/hocs/MainLayout';

function SignIn() {
  return (
    <MainLayout>
      <SignInForm />
    </MainLayout>
  );
}

export default SignIn;

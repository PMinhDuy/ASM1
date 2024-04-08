import SignUpForm from '#/shared/components/authentication/SignUpForm';
import MainLayout from '../shared/hocs/MainLayout';

function SignUp() {
  return (
    <MainLayout>
      <SignUpForm />
    </MainLayout>
  );
}

export default SignUp;

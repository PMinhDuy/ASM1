import MainLayout from '../shared/hocs/MainLayout';
import SignUpForm from '../features/authentication/components/SignUpForm';

function SignUp() {
  return (
    <MainLayout>
      <SignUpForm />
    </MainLayout>
  );
}

export default SignUp;

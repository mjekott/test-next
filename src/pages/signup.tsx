import AuthLayout from '@/components/layout/authLayout/AuthLayout';
import SignupForm from 'src/features/auth/components/SignupForm';
import { NextPageWithLayout } from './page';

const Signup: NextPageWithLayout = () => {
  return <SignupForm />;
};

export default Signup;

Signup.getLayout = page => <AuthLayout>{page}</AuthLayout>;

import AuthLayout from '@/components/layout/authLayout/AuthLayout';
import { GetServerSideProps } from 'next';
import requireNotAuthenticated from 'src/features/auth/helpers/requireNotAuthenticated';
import SignupForm from '../features/auth/components/signupForm/SignupForm';
import { NextPageWithLayout } from './page';

const Signup: NextPageWithLayout = () => {
  return <SignupForm />;
};

export default Signup;

Signup.getLayout = page => <AuthLayout>{page}</AuthLayout>;

export const getServerSideProps: GetServerSideProps = requireNotAuthenticated(
  async () => {
    return {
      props: {}
    };
  }
);

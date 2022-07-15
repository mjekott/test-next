/* eslint-disable @next/next/no-img-element */
import AuthLayout from '@/components/layout/authLayout/AuthLayout';
import { GetServerSideProps } from 'next';
import LoginForm from 'src/features/auth/components/loginForm/LoginForm';
import requireNotAuthenticated from '../features/auth/helpers/requireNotAuthenticated';
import { NextPageWithLayout } from './page';

const Login: NextPageWithLayout = () => {
  return <LoginForm />;
};

export default Login;

Login.getLayout = page => <AuthLayout>{page}</AuthLayout>;

export const getServerSideProps: GetServerSideProps = requireNotAuthenticated(
  async () => {
    return {
      props: {}
    };
  }
);

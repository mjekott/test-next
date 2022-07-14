/* eslint-disable @next/next/no-img-element */
import AuthLayout from '@/components/layout/authLayout/AuthLayout';
import LoginForm from 'src/features/auth/components/loginForm/LoginForm';
import { NextPageWithLayout } from './page';

const Login: NextPageWithLayout = () => {
  return <LoginForm />;
};

export default Login;

Login.getLayout = page => <AuthLayout>{page}</AuthLayout>;

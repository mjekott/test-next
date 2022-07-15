import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HiOutlineMail } from 'react-icons/hi';
import { MdArrowRightAlt } from 'react-icons/md';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import Button from '@/components/button/Button';
import Input from '@/components/Input/Input';
import PasswordInput from '@/components/Input/PasswordInput';
import { loginSchema } from '../../models/schema';
import { loginUserFn } from '../../services/authService';
import { ILoginData } from '../../types';

const LoginForm = () => {
  const router = useRouter();
  const methods = useForm<ILoginData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  });

  const { mutate, isLoading } = useMutation(
    (userData: ILoginData) => loginUserFn(userData),
    {
      onSuccess() {
        reset();
        router.push('/interest');
      },
      onError(error: any) {
        toast.error(error.response.data.message, {
          position: 'top-right'
        });
      }
    }
  );

  const onSubmitHandler: SubmitHandler<ILoginData> = values => {
    mutate(values);
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = methods;

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative mb-5 h-12 w-full md:hidden">
        <Image
          priority
          layout="fill"
          src="/static/images/logo.svg"
          alt="logo"
        />
      </div>
      <h3 className="mb-5 text-xl font-medium md:mb-[60px] md:text-3xl">
        I Have an account
      </h3>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="grid w-full max-w-sm gap-7"
      >
        <Input
          placeholder="Enter your email"
          StartIcon={HiOutlineMail}
          {...register('email')}
          error={errors.email?.message}
        />
        <PasswordInput
          placeholder="Choose a password"
          {...register('password')}
          error={errors.password?.message}
        />
        <div>
          <Button block loading={isLoading} disabled={isLoading}>
            Log me in <MdArrowRightAlt />
          </Button>
        </div>

        <div>
          <Link href="/signup" passHref>
            <Button as="a" variant="text" block>
              Get me onboarded <MdArrowRightAlt />
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

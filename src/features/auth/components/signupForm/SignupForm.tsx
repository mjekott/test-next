import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdArrowRightAlt } from 'react-icons/md';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import Button from '@/components/button/Button';
import Input from '@/components/Input/Input';
import PasswordInput from '@/components/Input/PasswordInput';
import { registerSchema } from '../../models/schema';
import { signUpUserFn } from '../../services/authService';
import { ISingupData } from '../../types';
import PasswordRequirement from '../passwordRequirement/PasswordRequirement';

const SignupForm = () => {
  const router = useRouter();
  const methods = useForm<ISingupData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange'
  });

  const { mutate, isLoading } = useMutation(
    (userData: ISingupData) => signUpUserFn(userData),
    {
      onSuccess() {
        toast.success('Registration Successfull', {
          position: 'top-right'
        });
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

  const onSubmitHandler: SubmitHandler<ISingupData> = values => {
    //  Execute the Mutation
    mutate(values);
  };

  const {
    reset,
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = methods;

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative mb-5 h-12 w-full md:hidden">
        <Image layout="fill" src="/static/images/logo.svg" alt="logo" />
      </div>
      <h3 className=" mb-5 text-xl font-medium md:mb-[60px] md:text-3xl">
        Get me onboarded!
      </h3>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="grid w-full max-w-sm gap-7"
      >
        <Input
          placeholder="Enter your firstname"
          StartIcon={FaRegUser}
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          placeholder="Enter your lastname"
          StartIcon={FaRegUser}
          {...register('lastName')}
          error={errors.lastName?.message}
        />
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
        <PasswordRequirement password={watch('password')} />
        <div>
          <Button type="submit" block loading={isLoading} disabled={isLoading}>
            Get me onboarded <MdArrowRightAlt />
          </Button>
        </div>
        <div>
          <Link href="/login" passHref>
            <Button type="button" as="a" variant="text" block>
              I already have an account <MdArrowRightAlt />
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

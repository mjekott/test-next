import Button from '@/components/button/Button';
import Input from '@/components/Input/Input';
import PasswordInput from '@/components/Input/PasswordInput';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdArrowRightAlt } from 'react-icons/md';

interface Props {}

const LoginForm: React.FC<Props> = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div className="mb-10 md:hidden relative w-full h-12">
        <Image layout="fill" src="/static/images/logo.svg" alt="logo" />
      </div>
      <h3 className="mb-[60px] text-xl font-medium md:text-3xl">
        I Have an account
      </h3>
      <form action="" className="grid gap-7 max-w-sm w-full">
        <Input
          name="email"
          placeholder="Enter your email"
          StartIcon={HiOutlineMail}
        />
        <PasswordInput name="password" placeholder="Enter your password" />
        <div>
          <Button block>
            Log me in <MdArrowRightAlt />
          </Button>
        </div>
        <div>
          <Link href="/signup">
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

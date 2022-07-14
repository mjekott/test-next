import Button from '@/components/button/Button';
import Input from '@/components/Input/Input';
import PasswordInput from '@/components/Input/PasswordInput';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdArrowRightAlt } from 'react-icons/md';

interface Props {}

const SignupForm: React.FC<Props> = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <div className="mb-10 md:hidden relative w-full h-12">
        <Image layout="fill" src="/static/images/logo.svg" alt="logo" />
      </div>
      <h3 className="mb-[60px] text-xl font-medium md:text-3xl">
        Get me onboarded!
      </h3>
      <form action="" className="grid gap-7 max-w-sm w-full">
        <Input
          name="email"
          placeholder="Enter your firstname"
          StartIcon={FaRegUser}
        />
        <Input
          name="email"
          placeholder="Enter your lastname"
          StartIcon={FaRegUser}
        />
        <Input
          name="email"
          placeholder="Enter your email"
          StartIcon={HiOutlineMail}
        />
        <PasswordInput name="password" placeholder="Choose a password" />
        <div>
          <Button block>
            Get me onboarded <MdArrowRightAlt />
          </Button>
        </div>
        <div>
          <Link href="/login">
            <Button as="a" variant="text" block>
              I already have an account <MdArrowRightAlt />
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

import Image from 'next/image';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="container grid min-h-screen py-5 md:grid-cols-5">
      <div className=" col-span-5 hidden flex-col gap-5 overflow-hidden bg-[#FBEFFF] py-20 md:col-span-3 md:flex">
        <div className="relative flex w-full justify-start pl-8 lg:mb-10  xl:pl-28">
          <div className="relative h-[80px] w-[150px] xl:h-[100px] xl:w-[200px]">
            <Image layout="fill" src="/static/images/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center gap-4 ">
          <div className="relative h-[250px] w-[100px] -translate-y-1/3 lg:h-[350px] lg:w-[150px]">
            <Image
              src="/static/images/auth1.svg"
              alt="auth-image"
              layout="fill"
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div className="relative h-[250px] w-[100px] lg:h-[350px] lg:w-[150px] ">
            <Image
              src="/static/images/auth2.svg"
              alt="auth-image"
              layout="fill"
              className="selector rounded-lg object-cover"
              priority
            />
          </div>
          <div className="relative h-[250px] w-[100px] -translate-y-1/3 lg:h-[350px] lg:w-[150px]">
            <Image
              src="/static/images/auth3.svg"
              alt="auth-image"
              layout="fill"
              className="selector rounded-lg object-cover"
              priority
            />
          </div>
          <div className="relative h-[250px] w-[100px] lg:h-[350px] lg:w-[150px] ">
            <Image
              src="/static/images/auth4.svg"
              alt="auth-image"
              layout="fill"
              className="selector rounded-lg object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-3 font-medium md:text-3xl">
            To learn formally and informally
          </p>
          <p>You can combine learning with fun</p>
        </div>
      </div>
      <div className="col-span-5 md:col-span-2">{children}</div>
    </section>
  );
};

export default AuthLayout;

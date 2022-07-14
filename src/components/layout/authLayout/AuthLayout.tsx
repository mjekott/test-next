import Image from 'next/image';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="min-h-screen container grid md:grid-cols-5">
      <div className=" hidden md:flex flex-col overflow-hidden col-span-5 gap-5 md:col-span-3 py-20">
        <div className="lg:mb-10 flex justify-start relative w-full pl-8  xl:pl-28">
          <div className="relative w-[150px] h-[80px] xl:w-[200px] xl:h-[100px]">
            <Image layout="fill" src="/static/images/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center gap-4 ">
          <div className="relative w-[100px] h-[250px] lg:w-[150px] lg:h-[350px] -translate-y-1/3">
            <Image
              src="/static/images/auth1.svg"
              alt="auth-image"
              layout="fill"
              className=" object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[100px] h-[250px] lg:w-[150px] lg:h-[350px] ">
            <Image
              src="/static/images/auth2.svg"
              alt="auth-image"
              layout="fill"
              className=" object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[100px] h-[250px] lg:w-[150px] lg:h-[350px] -translate-y-1/3">
            <Image
              src="/static/images/auth3.svg"
              alt="auth-image"
              layout="fill"
              className=" object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[100px] h-[250px] lg:w-[150px] lg:h-[350px] ">
            <Image
              src="/static/images/auth4.svg"
              alt="auth-image"
              layout="fill"
              className=" object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="font-medium md:text-3xl mb-3">
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

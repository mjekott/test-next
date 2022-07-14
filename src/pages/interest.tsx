/* eslint-disable @next/next/no-img-element */
import Button from '@/components/button/Button';
import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import InterestInput from 'src/features/interest/components/interestInput/InterestInput';

interface Props {}

const interest: React.FC<Props> = () => {
  return (
    <section className="container min-h-screen flex py-20  items-center justify-center relative">
      <div className="absolute inset-0">
        <img src="/static/images/interest-bg.svg" alt="" />
      </div>
      <div className="max-w-5xl w-full  py-10 rounded-2xl shadow-xl z-10 bg-white">
        <h3 className="font-medium text-2xl text-center">Topics of interest</h3>
        <p className="text-gray-400 mb-5 text-center px-5">
          Pick those categories that tickles your fancy.
        </p>
        <div className="p-14 grid sm:grid-cols-2  lg:grid-cols-4 gap-10">
          <InterestInput />
          <InterestInput />
          <InterestInput />
          <InterestInput />
        </div>
        <div className="flex justify-center lg:justify-end lg:pr-14">
          <Button>
            Continue <MdArrowRightAlt />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default interest;

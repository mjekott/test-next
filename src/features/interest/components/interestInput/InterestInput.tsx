import Image from 'next/image';
import React, { useState } from 'react';

interface Props {}

const InterestInput: React.FC<Props> = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => setChecked(!checked);
  return (
    <label className="flex  flex-col items-center select-none">
      <div
        className={`flex relative justify-center  items-center rounded-full ${
          checked &&
          'ring-2 ring-brand-800 ring-offset-4 ring-offset-purple-100'
        }`}
      >
        <div className="relative w-[114px] h-[114px] overflow-hidden rounded-full ">
          <Image
            layout="fill"
            src="/static/images/finance.svg"
            alt="finance"
            className={`w-full h-full rounded-full transition-all duration-300 object-cover ${
              checked && 'scale-105'
            } `}
          />
        </div>
        {checked && (
          <div className="absolute -top-1 -right-3  z-10 transition-all duration-300">
            <Image
              width="24px"
              height="24px"
              src="/static/images/checked.svg"
              alt="checked-image"
            />
          </div>
        )}
      </div>
      <h3 className="font-medium text-lg my-2">Finance</h3>
      <p className="flex gap-2 mb-1">
        <Image
          width="14px"
          height="14px"
          src="/static/images/user.svg"
          alt="user"
        />{' '}
        <span className="text-gray-400 text-sm">25k follows</span>
      </p>
      <p className="flex gap-2">
        <Image
          width="14px"
          height="14px"
          src="/static/images/pencil.svg"
          alt="user"
        />
        <span className="text-gray-400 text-sm">3.5k follows</span>
      </p>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={toggleCheck}
      />
    </label>
  );
};

export default InterestInput;

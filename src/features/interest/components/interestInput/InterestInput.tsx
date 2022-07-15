import Image from 'next/image';
import React, { useState } from 'react';
import { ITopic } from '../../types';

interface Props {
  interest: ITopic;
}

const InterestInput: React.FC<Props> = ({ interest }) => {
  const { displayName, followsCount, isFollowing } = interest;
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => setChecked(!checked);
  return (
    <label className="flex  select-none flex-col items-center">
      <div
        className={`relative flex items-center  justify-center rounded-full ${
          checked &&
          'ring-2 ring-brand-800 ring-offset-4 ring-offset-purple-100'
        }`}
      >
        <div className="relative h-[114px] w-[114px] overflow-hidden rounded-full ">
          <Image
            layout="fill"
            src="/static/images/finance.svg"
            alt="finance"
            className={`selector h-full w-full rounded-full object-cover transition-all duration-300 ${
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
      <h3 className="my-2 text-lg font-medium">{displayName}</h3>
      <p className="mb-1 flex gap-2">
        <Image
          width="14px"
          height="14px"
          src="/static/images/user.svg"
          alt="user"
        />{' '}
        <span className="text-sm text-gray-400">{isFollowing} followers</span>
      </p>
      <p className="flex gap-2">
        <Image
          width="14px"
          height="14px"
          src="/static/images/pencil.svg"
          alt="user"
        />
        <span className="text-sm text-gray-400">{followsCount} follows</span>
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

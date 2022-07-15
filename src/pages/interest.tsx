/* eslint-disable @next/next/no-img-element */
import Button from '@/components/button/Button';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { useInfiniteQuery } from 'react-query';
import InterestInput from 'src/features/interest/components/interestInput/InterestInput';
import requireAuthentication from '../features/auth/helpers/requireAuthentication';
import { getCoreTopics } from '../features/interest/services/InterestService';
import { ITopic } from '../features/interest/types/index';
import { NextPageWithLayout } from './page';

const Interest: NextPageWithLayout = () => {
  const [page] = useState(0);

  const { data } = useInfiniteQuery(
    'coreInterest',
    () => getCoreTopics({ pageParams: page }),
    {
      getNextPageParam: lastPage => {
        if (lastPage.data.pageNum < lastPage.data.totalPage)
          return lastPage.data.pageNum + 1;

        return false;
      }
    }
  );

  return (
    <div className="h-full min-h-screen overflow-hidden bg-brand-900">
      <section className="container relative flex h-full  items-center justify-center py-20">
        <div className="absolute inset-0">
          <img
            src="/static/images/interest-bg.svg"
            alt="bg"
            className="selector"
          />
        </div>
        <div className="z-10 w-full  max-w-5xl rounded-2xl bg-white py-10 shadow-xl ">
          <h3 className="bg-transparent text-center text-2xl font-medium">
            Topics of interest
          </h3>
          <p className="mb-5 bg-transparent px-5 text-center text-gray-400">
            Pick those categories that tickles your fancy.
          </p>
          <div className="grid max-h-[50vh] gap-10 overflow-y-auto p-14 scrollbar-thin scrollbar-track-purple-300 scrollbar-thumb-purple-900 sm:grid-cols-2 lg:max-h-[30vh] lg:grid-cols-4">
            {data?.pages.map(page => {
              return page.data.list.map((interest: ITopic) => (
                <InterestInput key={interest.topicId} interest={interest} />
              ));
            })}
          </div>
          <div className="flex justify-center pt-10 lg:justify-end lg:pr-14">
            <Link href="/edit-profile" passHref>
              <Button as="a">
                Continue <MdArrowRightAlt />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interest;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async () => {
    return {
      props: {}
    };
  }
);

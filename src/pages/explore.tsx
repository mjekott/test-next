import { GetServerSideProps } from 'next';
import requireAuthentication from 'src/features/auth/helpers/requireAuthentication';
import { NextPageWithLayout } from './page';

const explore: NextPageWithLayout = () => {
  return <div>explore</div>;
};

export default explore;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async () => {
    return {
      props: {}
    };
  }
);

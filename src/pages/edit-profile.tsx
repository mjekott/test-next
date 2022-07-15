import { GetServerSideProps } from 'next';
import requireAuthentication from 'src/features/auth/helpers/requireAuthentication';
import { NextPageWithLayout } from './page';

const EditProfile: NextPageWithLayout = () => {
  return <div>EditProfile</div>;
};

export default EditProfile;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async () => {
    return {
      props: {}
    };
  }
);

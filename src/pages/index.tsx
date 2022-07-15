import type { GetServerSideProps, NextPage } from 'next';
import requireNotAuthenticated from '../features/auth/helpers/requireNotAuthenticated';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = requireNotAuthenticated(
  async () => {
    return {
      props: {}
    };
  }
);

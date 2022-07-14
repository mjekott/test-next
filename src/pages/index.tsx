import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/login',
      permanent: true
    }
  };
};

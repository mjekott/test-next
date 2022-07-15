import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const requireAuthentication = (gssp: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;
    let token = null;
    if (req.headers.cookie) token = req.cookies['X-Access-Token'];

    if (!token)
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };

    return await gssp(ctx);
  };
};

export default requireAuthentication;

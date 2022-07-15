import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const requireNotAuthenticated = (gssp: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;

    let token = null;

    if (req.headers.cookie) token = req.cookies['X-Access-Token'];

    if (token)
      return {
        redirect: {
          destination: '/explore',
          permanent: false
        }
      };

    return await gssp(ctx);
  };
};

export default requireNotAuthenticated;

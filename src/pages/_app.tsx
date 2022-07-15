import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from 'src/features/auth/context/AuthContextProvider';
import { queryClient } from 'src/lib/queryClient';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
          <ToastContainer />
        </Hydrate>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

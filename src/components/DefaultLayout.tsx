import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '~/store/store';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Head>
          <title>Prisma Starter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>{children}</main>
      </ThemeProvider>
    </Provider>
  );
};

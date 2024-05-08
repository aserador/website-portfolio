import { ChakraProvider } from '@chakra-ui/react';
import type { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';

import defaultSEOConfig from '../../next-seo.config';
import Layout from '../components/layout';
import createEmotionCache from 'styles/createEmotionCache';
import customTheme from 'styles/customTheme';
import 'styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <script src="https://cdn.counter.dev/script.js" data-id="806deabe-f1bf-4656-94c6-8ee513cc3c50" data-utcoffset="-5"></script>
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WQ6SL054X0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WQ6SL054X0');
        `}
        </Script>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;

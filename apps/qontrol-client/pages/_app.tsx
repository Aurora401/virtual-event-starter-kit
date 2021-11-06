import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'semantic-ui-css/semantic.min.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to qontrol-client!</title>
      </Head>
      <main className="app">        
          <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

import { FC } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppBar } from '../components/AppBar';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification';
import { ContextProvider } from '../contexts/ContextProvider';

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="bg-default-900">
      <Head>
        <title>Solana Token Creator</title>
      </Head>
      <ContextProvider>
        <Notifications />
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>

      {/* //SCRIPTS */}
      <script src="assets/libs/preline/preline.js"></script>
      <script src="assets/libs/swiper/swiper-bundle.min.js"></script>
      <script src="assets/libs/gumshoejs/gumshoe.polyfills.min.js"></script>
      <script src="assets/libs/lucide/lucide.min.js"></script>
      <script src="assets/libs/aos/aos.js"></script>
      <script src="assets/js/swiper.js"></script>
      <script src="assets/js/theme.js"></script>

    </div>
  );
};

export default App;
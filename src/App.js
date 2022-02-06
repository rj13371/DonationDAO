import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import { useMoralis } from 'react-moralis';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import 'scss/react-images.scss';
import 'scss/slick-slider.scss';

const browserHistory = createBrowserHistory();

const App = () => {
  const {
    isInitialized,
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
  } = useMoralis();

  useEffect(() => {
    if (isInitialized && isAuthenticated && !isWeb3Enabled) {
      enableWeb3();
    }
  }, [isInitialized, isAuthenticated, isWeb3Enabled]);

  return (
    <HashRouter history={browserHistory}>
      <Routes />
    </HashRouter>
  );
};

export default App;

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { Home } from './src/pages/Home';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;

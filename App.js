/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ThemeProvider} from 'react-native-elements';

import Navigation from './src/navigation/Navigation';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

import {SafeAreaView} from 'react-native';

const App = () => {
  return (
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
  );
};

export default App;

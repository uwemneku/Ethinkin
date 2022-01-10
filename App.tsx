import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingNavigator} from 'navigation';

const App = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

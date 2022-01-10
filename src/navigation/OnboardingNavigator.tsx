import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnboardingRouteParams} from '@types';
import {CardsScreen} from '@screens/onboarding';

const {Navigator, Screen} = createStackNavigator<OnboardingRouteParams>();

const OnboardingNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="cards" component={CardsScreen} />
    </Navigator>
  );
};

export default OnboardingNavigator;

const styles = StyleSheet.create({});

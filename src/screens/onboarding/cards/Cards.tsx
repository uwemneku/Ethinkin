import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {AnimatedCards} from './components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {onBoardingColors} from 'constant';
import {BlockChainIcon, ContractIcon, WalletIcon} from 'assets';

const Cards = () => {
  const {width} = useWindowDimensions();
  const scrollOffset = useSharedValue(0);
  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      scrollOffset.value = contentOffset.x;
    },
  });
  const animatedBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollOffset.value,
      [0, width, width * 2, width * 3],
      onBoardingColors,
    ),
  }));
  return (
    <Animated.ScrollView style={[{flex: 1}, animatedBackgroundStyle]}>
      <Animated.ScrollView
        horizontal={true}
        onScroll={handleScroll}
        snapToAlignment="center"
        disableIntervalMomentum={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        snapToInterval={width}>
        {icons.map(({lottieFile, title}, index) => {
          return (
            <AnimatedCards
              key={title}
              {...{index, lottieFile, scrollOffset, title}}
            />
          );
        })}
      </Animated.ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
};

export default Cards;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#2F80ED',
  },
  scrollView: {
    // backgroundColor: 'red',
    // height: 500,
  },
});

const icons: Array<{lottieFile: any; title: string}> = [
  {lottieFile: BlockChainIcon, title: `Explore the Blockchain`},
  {lottieFile: WalletIcon, title: 'Check balance'},
  {lottieFile: ContractIcon, title: 'View contracts'},
  {lottieFile: BlockChainIcon, title: 'View1 contracts'},
  {lottieFile: WalletIcon, title: 'View2 contracts'},
  {lottieFile: ContractIcon, title: 'View3 contracts'},
];

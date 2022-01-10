import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface AnimatedCardsProps {
  index: number;
  scrollOffset: Animated.SharedValue<number>;
  lottieFile: any;
  title: string;
}

const AnimationContainer = ({
  index,
  scrollOffset,
  lottieFile,
  title,
}: AnimatedCardsProps) => {
  const {width} = useWindowDimensions();
  const animatedContainerStyle = useAnimatedStyle(() => ({
    zIndex: interpolate(
      scrollOffset.value,
      [
        (index - 2) * width,
        (index - 1) * width,
        (index - 1.5) * width,
        index * width,
        (index + 1.5) * width,
        (index + 1) * width,
        (index + 2) * width,
      ],
      [-1, 0, 2, 2, 2, 0, -1],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [-width / 30, 0, -width / 30],
          Extrapolate.CLAMP,
        ),
      },
      {
        translateX: interpolate(
          scrollOffset.value,
          [
            (index - 2) * width,
            (index - 1) * width,
            // (index - 0.5) * width,
            index * width,
            // (index + 0.5) * width,
            (index + 1) * width,
            (index + 2) * width,
          ],
          [-width * 2, -width / 1.7, 0, width / 1.7, width * 2],
          Extrapolate.CLAMP,
        ),
      },
      {
        scale: interpolate(
          scrollOffset.value,
          [(index - 1) * width, index * width, (index + 1) * width],
          [0.8, 1, 0.8],
          Extrapolate.CLAMP,
        ),
      },
      {
        rotateY:
          interpolate(
            scrollOffset.value,
            [
              (index - 2) * width,
              (index - 1) * width,
              index * width,
              (index + 1) * width,
              (index + 2) * width,
            ],
            [180, 60, 0, -60, -180],
            Extrapolate.CLAMP,
          ) + 'deg',
      },
    ],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollOffset.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0.2, 1, 0.2],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <Animated.View style={[styles.container, {width}, animatedContainerStyle]}>
      <View style={styles.box}>
        <AnimatedLottieView
          source={lottieFile}
          autoPlay
          style={styles.lottie}
        />
      </View>
      {/* <Animated.Text style={[styles.cardTitle, animatedTextStyle]}>
        {title}
      </Animated.Text> */}
    </Animated.View>
  );
};

export default AnimationContainer;

const styles = StyleSheet.create({
  container: {
    padding: 80,
  },
  box: {
    backgroundColor: 'whitesmoke',
    height: 250,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  lottie: {width: 200, height: 200},
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
});

import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgress = ({ size, progress, time }) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const animatedProgress = (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height={size} width={size} style={styles.svg}>
        <Circle
          stroke="#e6e7e8"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          stroke="#3b5998"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - animatedProgress}
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <View style={styles.glowContainer}>
        <View style={styles.glowCircle} />
      </View>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
  },
  timeContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  glowContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowCircle: {
    width: '120%',
    height: '120%',
    borderRadius: 999,
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    opacity: 0.7,
  },
});

export default CircularProgress;

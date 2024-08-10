import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MeditationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mindfulness & Meditation</Text>
      {/* Add your meditation UI elements here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default MeditationScreen;

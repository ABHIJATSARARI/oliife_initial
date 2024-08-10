import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MindfulnessExercises = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mindfulness Exercises</Text>
      {/* Add your mindfulness exercises UI elements here */}
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

export default MindfulnessExercises;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutPlans = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Plans</Text>
      <Text style={styles.metric}>Plan: Full Body Workout</Text>
      <Text style={styles.metric}>Duration: 45 minutes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  metric: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default WorkoutPlans;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActivityTrackerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Daily Activity Tracker</Text>
      {/* Add your activity tracker UI elements here */}
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

export default ActivityTrackerScreen;

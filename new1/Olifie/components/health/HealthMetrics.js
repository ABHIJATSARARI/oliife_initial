import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthMetrics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Health Metrics</Text>
      {/* Add your health metric UI elements here */}
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

export default HealthMetrics;

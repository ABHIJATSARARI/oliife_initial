import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FootprintCalculator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carbon Footprint Calculator</Text>
      <Text style={styles.metric}>Daily Footprint: 10 kg CO2</Text>
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

export default FootprintCalculator;

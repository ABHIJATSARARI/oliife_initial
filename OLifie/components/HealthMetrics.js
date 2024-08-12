import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const healthMetricsData = {
  steps: '11,000',
  heartRate: '72 bpm',
};

const HealthMetrics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.metricContainer}>
        <Ionicons name="walk" size={24} color="#fff" />
        <Text style={styles.metricText}>Steps: {healthMetricsData.steps}</Text>
      </View>
      <View style={styles.metricContainer}>
        <Ionicons name="heart" size={24} color="#fff" />
        <Text style={styles.metricText}>Heart Rate: {healthMetricsData.heartRate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Removed card background
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  metricContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  metricText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});

export default HealthMetrics;

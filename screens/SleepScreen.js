import React from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import CircularProgress from '../components/CircularProgress'; // Assume this component exists
import { LinearGradient } from 'expo-linear-gradient';
import { sleepMetricsData } from '../components/SleepTracking'; // Importing the sleep metrics data
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SleepScreen = ({ navigation }) => {
  const { sleepQuality, sleepDuration, oxygenVariation } = sleepMetricsData; // Destructuring the sleep metrics data

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.header}>Sleep</Text>
      <View style={styles.graphicContainer}>
        <View style={styles.glowContainer}>
          <LinearGradient
            colors={['rgba(0, 255, 255, 0.5)', 'transparent']}
            style={styles.glow}
          />
          <CircularProgress size={width * 0.6} progress={sleepQuality} time={sleepDuration} />
        </View>
      </View>
      <View style={styles.metricsContainer}>
        <View style={styles.metricBar}>
          <Text style={styles.metricText}>Deep Sleep</Text>
          <View style={[styles.bar, { backgroundColor: 'blue', width: '50%' }]} />
        </View>
        <View style={styles.metricBar}>
          <Text style={styles.metricText}>Light Sleep</Text>
          <View style={[styles.bar, { backgroundColor: 'lightblue', width: '30%' }]} />
        </View>
        <View style={styles.metricBar}>
          <Text style={styles.metricText}>REM Sleep</Text>
          <View style={[styles.bar, { backgroundColor: 'purple', width: '20%' }]} />
        </View>
        <View style={styles.metricBar}>
          <Text style={styles.metricText}>Oxygen Variation: {oxygenVariation}</Text>
          <View style={[styles.bar, { backgroundColor: 'orange', width: '20%' }]} />
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1931',
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  header: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: height * 0.02, // Adjusted space below header
  },
  graphicContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: height * 0.05, // Move circular design up
  },
  glowContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: width * 0.75,
    height: width * 0.75,
    borderRadius: (width * 0.75) / 2,
    opacity: 0.8,
  },
  metricsContainer: {
    width: '100%',
    paddingHorizontal: width * 0.05,
    marginBottom: height * 0.1, // Adjusted space from bottom
  },
  metricBar: {
    marginVertical: 10,
  },
  metricText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  bar: {
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#555',
  },
  menuButton: {
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.05,
    width: 50,
    height: 50,
    backgroundColor: '#36C',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default SleepScreen;

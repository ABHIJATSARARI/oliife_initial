import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HealthMetrics, { healthMetricsData } from '../components/HealthMetrics';
import SleepTracking, { sleepMetricsData } from '../components/SleepTracking';
import ChatComponent from '../components/ChatComponent'; // Import the new component

const DashboardScreen = ({ navigation }) => {
  const [activeMetric, setActiveMetric] = useState('HealthMetrics');

  return (
    <ImageBackground style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Bear Image */}
        <View style={styles.header}>
          <ImageBackground source={require('../assets/bear1.jpg')} style={styles.bearImage}>
            <View style={styles.bearImageOverlay} />
          </ImageBackground>
        </View>

        {/* Columns for HealthMetrics and SleepTracking */}
        <View style={styles.columnsContainer}>
          <TouchableOpacity style={styles.column} onPress={() => setActiveMetric('HealthMetrics')}>
            <Text style={styles.columnText}>Health Metrics</Text>
            <View style={styles.line} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.column} onPress={() => setActiveMetric('SleepTracking')}>
            <Text style={styles.columnText}>Sleep Metrics</Text>
            <View style={styles.line} />
          </TouchableOpacity>
        </View>

        {/* Metrics Display */}
        <View style={styles.metricsContainer}>
          {activeMetric === 'HealthMetrics' && (
            <>
              <View style={styles.metric}>
                <Ionicons name="walk" size={30} color="#fff" />
                <Text style={styles.metricText}>Steps: {healthMetricsData.steps}</Text>
              </View>
              <View style={styles.metric}>
                <Ionicons name="heart" size={30} color="#fff" />
                <Text style={styles.metricText}>Heart Rate: {healthMetricsData.heartRate}</Text>
              </View>
            </>
          )}
          {activeMetric === 'SleepTracking' && (
            <>
              <View style={styles.metric}>
                <Ionicons name="moon" size={30} color="#fff" />
                <Text style={styles.metricText}>Sleep Quality: {sleepMetricsData.sleepQuality}</Text>
              </View>
              <View style={styles.metric}>
                <Ionicons name="time" size={30} color="#fff" />
                <Text style={styles.metricText}>Sleep Duration: {sleepMetricsData.sleepDuration}</Text>
              </View>
            </>
          )}
        </View>

        {/* Chat Component */}
        <ChatComponent apiKey="YOUR_API_KEY" />

      </ScrollView>

      {/* Menu Button */}
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="menu" size={24} color="#fff" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000', // Changed background color to black
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 10, // Decreased space between bear image and metrics
    marginBottom: 10, // Decreased space between bear image and metrics
  },
  bearImage: {
    width: 400, // Adjusted size
    height: 590, // Adjusted size
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    marginTop : 20,
  },
  bearImageOverlay: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50, // Smooth bottom edge
    borderBottomRightRadius: 50, // Smooth bottom edge
    overflow: 'hidden',
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  columnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  line: {
    height: 2,
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 5,
  },
  metricsContainer: {
    width: '90%',
    alignItems: 'center',
    padding: 10,
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  metricText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  menuButton: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DashboardScreen;

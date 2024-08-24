import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card'; // Import the Card component

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Activity</Text>
        
        {/* Profile and Events Section */}
        <View style={styles.topSection}>
          <Card icon1="person" icon2="calendar" title="Profile & Events" />
        </View>
        
        {/* Mood Journal Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mood Journal</Text>
            <Switch value={true} />
          </View>
          <View style={styles.glowingBarContainer}>
            <View style={styles.glowingBar} />
            <View style={styles.glowingBarLabels}>
              <Text style={styles.glowingBarLabel}>1</Text>
              <Text style={styles.glowingBarLabel}>2</Text>
              <Text style={styles.glowingBarLabel}>3</Text>
              <Text style={styles.glowingBarLabel}>4</Text>
              <Text style={styles.glowingBarLabel}>5</Text>
              <Text style={styles.glowingBarLabel}>6</Text>
              <Text style={styles.glowingBarLabel}>7</Text>
            </View>
          </View>
        </View>
        
        {/* Special Entries Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Special Entries</Text>
          <View style={styles.specialEntriesContainer}>
            {/* Left Half Circle */}
            <View style={styles.halfCircleLeft}>
              <Image source={require('../assets/left_half_circle.png')} style={styles.halfCircleImage} />
            </View>
            {/* Right Half Circle */}
            <View style={styles.halfCircleRight}>
              <Image source={require('../assets/right_half_circle.png')} style={styles.halfCircleImage} />
            </View>
          </View>
        </View>
        
        {/* Insights Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Insights</Text>
          <View style={styles.insightsContainer}>
            <View style={styles.insightIcon}>
              <Ionicons name="sunny-outline" size={24} color="#fff" />
            </View>
            <TouchableOpacity style={styles.insightButton}>
              <Text style={styles.insightButtonText}>Test insight</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Menu Button */}
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Updated background color to match the image
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(51, 51, 51, 0.7)', // Adjusted for transparency
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(68, 68, 68, 0.7)', // Adjusted for transparency
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  glowingBarContainer: {
    marginTop: 10,
  },
  glowingBar: {
    height: 10,
    backgroundColor: '#00e6e6',
    borderRadius: 5,
    marginBottom: 5,
    shadowColor: '#00e6e6',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  glowingBarLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  glowingBarLabel: {
    color: '#fff',
    fontSize: 16,
  },
  specialEntriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  halfCircleLeft: {
    width: '48%',
    height: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: '#333', // Apply actual content later
  },
  halfCircleRight: {
    width: '48%',
    height: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: '#333', // Apply actual content later
  },
  halfCircleImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  insightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  insightIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insightButton: {
    flexGrow: 1,
    backgroundColor: '#00e6e6', // Brighter color for button
    paddingVertical: 15,
    borderRadius: 50,
    marginLeft: 10,
  },
  insightButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ActivityScreen;

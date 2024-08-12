import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MoodJournal from '../components/MoodJournal';

const ActivityScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Activity</Text>
        <MoodJournal />
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
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

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuidedMeditations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guided Meditations</Text>
      <Text style={styles.session}>Session: Morning Meditation</Text>
      <Text style={styles.session}>Duration: 10 minutes</Text>
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
  session: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default GuidedMeditations;

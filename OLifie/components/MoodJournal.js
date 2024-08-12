import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodJournal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Journal</Text>
      <Text style={styles.metric}>Mood: Happy</Text>
      <Text style={styles.metric}>Notes: Had a great day!</Text>
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

export default MoodJournal;

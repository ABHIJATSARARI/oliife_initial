import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodJournal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mood Journal</Text>
      {/* Add your mood journal UI elements here */}
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

export default MoodJournal;

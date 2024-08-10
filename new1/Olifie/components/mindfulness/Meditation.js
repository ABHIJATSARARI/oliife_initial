import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Meditation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guided Meditations</Text>
      {/* Add your guided meditations UI elements here */}
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

export default Meditation;

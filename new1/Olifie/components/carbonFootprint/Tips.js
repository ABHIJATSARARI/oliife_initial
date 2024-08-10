import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eco-Friendly Tips</Text>
      {/* Add your eco-friendly tips UI elements here */}
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

export default Tips;

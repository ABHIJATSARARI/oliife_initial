import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FootprintCalc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carbon Footprint Calculator</Text>
      {/* Add your carbon footprint calculator UI elements here */}
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

export default FootprintCalc;

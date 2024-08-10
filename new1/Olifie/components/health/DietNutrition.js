import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DietNutrition = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diet and Nutrition</Text>
      {/* Add your diet and nutrition UI elements here */}
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

export default DietNutrition;

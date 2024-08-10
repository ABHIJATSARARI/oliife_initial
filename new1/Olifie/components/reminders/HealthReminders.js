import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthReminders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Health Reminders</Text>
      {/* Add your health reminders UI elements here */}
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

export default HealthReminders;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthReminders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Reminders</Text>
      <Text style={styles.reminder}>Drink Water</Text>
      <Text style={styles.reminder}>Take Medication</Text>
      <Text style={styles.reminder}>Exercise</Text>
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
  reminder: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HealthReminders;

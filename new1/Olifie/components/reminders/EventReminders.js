import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventReminders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event Reminders</Text>
      {/* Add your event reminders UI elements here */}
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

export default EventReminders;

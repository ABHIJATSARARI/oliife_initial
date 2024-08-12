import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatInterface = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Chat Interface</Text>
      <Text style={styles.message}>Hello! How can I assist you today?</Text>
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
  message: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ChatInterface;

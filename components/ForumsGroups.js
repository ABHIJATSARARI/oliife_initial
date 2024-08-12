import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForumsGroups = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forums and Groups</Text>
      <Text style={styles.group}>Group: Health Enthusiasts</Text>
      <Text style={styles.group}>Members: 150</Text>
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
  group: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ForumsGroups;

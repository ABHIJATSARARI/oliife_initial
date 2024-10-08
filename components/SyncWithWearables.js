import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SyncWithWearables = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sync with Wearables</Text>
      <Text style={styles.info}>Status: Connected</Text>
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
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SyncWithWearables;

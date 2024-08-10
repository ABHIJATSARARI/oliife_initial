import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppSettings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App Settings</Text>
      {/* Add your app settings UI elements here */}
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

export default AppSettings;

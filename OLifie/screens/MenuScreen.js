import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const menuItems = [
  { name: 'Dashboard', icon: require('../assets/icons/Dash_ico.png') },
  { name: 'Sleep', icon: require('../assets/icons/sleep_ico.png') },
  { name: 'Diet', icon: require('../assets/icons/diet_ico.png') },
  { name: 'Fitness', icon: require('../assets/icons/Fitness_ico.png') },
  { name: 'Activity', icon: require('../assets/icons/Activity_ico.png') },
  { name: 'Carbon Footprint', icon: require('../assets/icons/Carbon_ico.png') },
  { name: 'AI Companion', icon: require('../assets/icons/AI_ico.png') },
  { name: 'Notifications', icon: require('../assets/icons/Notifications_ico.png') },
  { name: 'Profile', icon: require('../assets/icons/Profile_ico.png') },
  { name: 'Data Sync', icon: require('../assets/icons/Data_ico.png') },
  { name: 'Mindfulness', icon: require('../assets/icons/Mindfulness_ico.png') },
  { name: 'Community', icon: require('../assets/icons/Community_ico.png') },
];

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Menu</Text>
        <View style={styles.grid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.name)}
            >
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.menuText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 15,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default MenuScreen;

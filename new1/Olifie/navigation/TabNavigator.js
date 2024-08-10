import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealthDashboardScreen from '../screens/HealthDashboardScreen';
import ActivityTrackerScreen from '../screens/ActivityTrackerScreen';
import CarbonFootprintScreen from '../screens/CarbonFootprintScreen';
import AICompanionScreen from '../screens/AICompanionScreen';
import MeditationScreen from '../screens/MeditationScreen';
import CommunityScreen from '../screens/CommunityScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Health" component={HealthDashboardScreen} />
      <Tab.Screen name="Activity" component={ActivityTrackerScreen} />
      <Tab.Screen name="Carbon Footprint" component={CarbonFootprintScreen} />
      <Tab.Screen name="AI Companion" component={AICompanionScreen} />
      <Tab.Screen name="Meditation" component={MeditationScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import SleepScreen from '../screens/SleepScreen';
import DietScreen from '../screens/DietScreen';
import FitnessScreen from '../screens/FitnessScreen';
import ActivityScreen from '../screens/ActivityScreen';
import CarbonFootprintScreen from '../screens/CarbonFootprintScreen';
import AICompanionScreen from '../screens/AICompanionScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DataSyncScreen from '../screens/DataSyncScreen';
import MindfulnessScreen from '../screens/MindfulnessScreen';
import CommunityScreen from '../screens/CommunityScreen';
import MenuScreen from '../screens/MenuScreen';

const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Sleep" component={SleepScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Diet" component={DietScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fitness" component={FitnessScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Carbon Footprint" component={CarbonFootprintScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AI Companion" component={AICompanionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Data Sync" component={DataSyncScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Mindfulness" component={MindfulnessScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Community" component={CommunityScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default TabNavigator;

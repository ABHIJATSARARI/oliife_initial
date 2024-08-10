import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
      {/* Add other stack screens as needed */}
    </Stack.Navigator>
  );
};

export default AppNavigator;

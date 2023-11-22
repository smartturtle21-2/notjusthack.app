// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '/src/components/LoginScreen';
import MainScreen from '/src/components/MainScreen';
import PostNeedScreen from '/src/components/PostNeedScreen';
import NeedsScreen from '/src/components/NeedsScreen'; // Import the NeedsScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="PostNeed" component={PostNeedScreen} />
        <Stack.Screen name="Needs" component={NeedsScreen} /> {/* Add this line */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

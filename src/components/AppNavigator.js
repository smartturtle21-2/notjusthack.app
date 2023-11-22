// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import PostNeedScreen from './components/PostNeedScreen';
import PostOfferScreen from './components/PostOfferScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import { AppProvider } from './components/AppContext'; // Adjust import path if needed
import DetailScreen from './components/DetailScreen';
import OfferDetailScreen from './components/OfferDetailScreen';
import MessageScreen from './components/MessageScreen';




const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppProvider> {/* Wrap the entire app with AppProvider */}
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} /> {/* Add this line */}
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="PostNeed" component={PostNeedScreen} />
          <Stack.Screen name="PostOffer" component={PostOfferScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="OfferDetailScreen" component={OfferDetailScreen} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/components/MainScreen';  // Corrected import path
import PostNeedScreen from './src/components/PostNeedScreen';  // Corrected import path
import PostOfferScreen from './src/components/PostOfferScreen';  // Corrected import path
import LoginScreen from './src/components/LoginScreen';  // Corrected import path
import SignUpScreen from './src/components/SignUpScreen';  // Corrected import path
import { AppProvider } from './src/components/AppContext';  // Corrected import path
import DetailScreen from './src/components/DetailScreen';  // Corrected import path
import OfferDetailScreen from './src/components/OfferDetailScreen';  // Corrected import path
import MessageScreen from './src/components/MessageScreen';  // Corrected import path
import CallScreen from './src/components/CallScreen';  // Corrected import path
import EditInfoScreen from './src/components/EditInfoScreen';  // Corrected import path


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider> {/* Wrap the entire app with AppProvider */}
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="PostNeed" component={PostNeedScreen} />
          <Stack.Screen name="PostOffer" component={PostOfferScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="OfferDetailScreen" component={OfferDetailScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          <Stack.Screen name="CallScreen" component={CallScreen} />
          <Stack.Screen name="EditInfoScreen" component={EditInfoScreen} />

        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '/src/components/MainScreen';
import PostNeedScreen from '/src/components/PostNeedScreen';
import PostOfferScreen from '/src/components/PostOfferScreen';
import LoginScreen from '/src/components/LoginScreen';
import { AppProvider } from '/src/components/AppContext'; // Import the AppProvider from AppContext
import DetailScreen from '/src/components/DetailScreen';
import OfferDetailScreen from '/src/components/OfferDetailScreen';

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
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, Provider } from 'react-native-paper';
import NeedsScreen from '/src/components/NeedsScreen';
import OffersScreen from '/src/components/OffersScreen';
import MyProfileScreen from '/src/components/MyProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const CenterButton = ({ onPress }) => (
  <TouchableOpacity style={styles.centerButton} onPress={onPress}>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>+</Text>
  </TouchableOpacity>
);

const MainScreen = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [showPostButtons, setShowPostButtons] = useState(false);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible);
    setShowPostButtons(false); // Close the post buttons when opening the menu
  };

  const handleMenuPress = () => {
    setMenuVisible(false);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
    handleMenuPress();
  };

  const handleCenterButtonClick = () => {
    setShowPostButtons(!showPostButtons);
  };

  const handleScreenPress = () => {
    setShowPostButtons(false);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={styles.container}>
          <Appbar.Header>
            <Appbar.Action icon="menu" onPress={handleToggleMenu} />
            <Appbar.Content title="Psoolbr App" />
          </Appbar.Header>

          <Tab.Navigator>
  <Tab.Screen 
    name="Needs" 
    component={NeedsScreen} 
    options={{ 
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-list" color={color} size={size} />
      ),
    }} 
  />

  <Tab.Screen 
    name="Center" 
    component={() => null} 
    options={{ 
      tabBarButton: () => null,
    }} 
  />

  <Tab.Screen 
    name="Offers" 
    component={OffersScreen} 
    options={{ 
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-gift" color={color} size={size} />
      ),
    }} 
  />

  <Tab.Screen 
    name="My Profile" 
    component={MyProfileScreen} 
    options={{ 
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="ios-person" color={color} size={size} />
      ),
    }} 
  />
</Tab.Navigator>

          {showPostButtons && (
            <View style={styles.postButtonsContainer}>
              <TouchableOpacity
                style={styles.postButton}
                onPress={() => {
                  navigation.navigate('PostNeed');
                  handleMenuPress();
                }}
              >
                <Text style={styles.postButtonText}>Post Need</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.postButton}
                onPress={() => {
                  navigation.navigate('PostOffer');
                  handleMenuPress();
                }}
              >
                <Text style={styles.postButtonText}>Post Offer</Text>
              </TouchableOpacity>
            </View>
          )}

          <CenterButton onPress={handleCenterButtonClick} />

          <Modal
            animationType="slide"
            transparent={true}
            visible={isMenuVisible}
            onRequestClose={() => setMenuVisible(false)}
          >
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  handleLogout();
                }}
              >
                <Text style={styles.menuItemText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

 
  centerButton: {
    position: 'absolute',
    bottom: 75,
    right: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 25,
    width: 48,
    height: 48,
  },
   postButtonsContainer: {
    position: 'absolute',
    bottom: 125,
    right: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 144,
   
  },
  postButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10, // Add margin bottom to create space
  },
  postButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuItem: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
   menuItemText: {
    fontSize: 18,
  },
});

export default MainScreen;

// CallScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import profileLogo from '/src/assets/Google.png'; // replace with the actual path to your image file

const CallScreen = ({ route }) => {
  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="black" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.userContainer}>
        <View style={styles.userImageContainer}>
          <Image source={user.profileLogo} style={styles.userImage} />
        </View>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <TouchableOpacity style={styles.callButton}>
        <Icon name="call" size={24} color="white" />
        <Text style={styles.callButtonText}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5', // Add a background color
    },
    userContainer: {
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: '#EEEEEE', // Add a background color
      padding: 10, // Add padding
      borderRadius: 5, // Add border radius
    },
    userImageContainer: {
      borderRadius: 60, // half of the width and height of the user image
      overflow: 'hidden',
      marginBottom: 10,
    },
    userImage: {
      width: 120,
      height: 120,
      borderRadius: 60, // to create a circular shape
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333333', // Change the text color
    },
    callButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#007BFF', // Change the background color to blue
      borderRadius: 5,
      marginTop: 20,
      width: 250,
      elevation: 3, // Add shadow for Android
      shadowColor: '#000', // Add shadow for iOS
      shadowOffset: { width: 0, height: 2 }, // Add shadow for iOS
      shadowOpacity: 0.25, // Add shadow for iOS
      shadowRadius: 3.84, // Add shadow for iOS
    },
    callButtonText: {
      color: 'white',
      marginLeft: 10,
      fontSize: 18, // Increase the font size
      fontWeight: 'bold', // Make the text bold
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#DDDDDD', // Add a background color
      padding: 10, // Add padding
      borderRadius: 5, // Add border radius
    },
    backButtonText: {
      marginLeft: 5,
      fontSize: 16, // Increase the font size
      fontWeight: 'bold', // Make the text bold
    },
  });
  
  export default CallScreen;
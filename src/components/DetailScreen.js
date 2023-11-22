// DetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  // State to track view count
  const [viewCount, setViewCount] = useState(item.postViews);

  useFocusEffect(
    React.useCallback(() => {
      // Update view count when the screen comes into focus
      setViewCount((prevCount) => prevCount + 1);
    }, [])
  );

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="black" />
        <Text style={{ color: 'black', marginLeft: 5 }}>Back to Main Screen</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{item.details}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />

      {item.user && (
  <View style={styles.userInfoContainer}>
    <Image source={item.user.profileLogo} style={styles.userLogo} />
    <View>
    <Text style={styles.userName}>John Doe</Text>
      <Text style={styles.postDate}>Posted on {item.postDate}</Text>
    </View>
  </View>
)}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description:</Text>
        <Text>{item.desc}</Text>
      </View>

      {item.quantity !== '' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantity (optional):</Text>
          <Text>{item.quantity}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.callButton} onPress={() => navigation.navigate('CallScreen', { user: item.user })}>
  <Text style={styles.buttonText}>Call</Text>
</TouchableOpacity>
        <TouchableOpacity style={styles.messageButton} onPress={() => navigation.navigate('MessageScreen', { user: item.user })}>
  <Text style={styles.buttonText}>Message</Text>
</TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5', // Add a background color
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#DDDDDD', // Add a background color
    padding: 10, // Add padding
    borderRadius: 5, // Add border radius
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333', // Change the text color
  },
  image: {
    width: Dimensions.get('window').width - 32, // Subtract the total padding or margin from the width
    height: (Dimensions.get('window').width - 32) * (9 / 16), // Adjust the height accordingly
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#EEEEEE', // Add a background color
    padding: 10, // Add padding
    borderRadius: 5, // Add border radius
  },
  userLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
  },
  postDate: {
    fontSize: 16, // Increase the font size
    color: '#555555', // Darken the text color
    marginBottom: 5,
    fontStyle: 'italic', // Make the text italic
  },
  viewCount: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#EEEEEE', // Add a background color
    padding: 10, // Add padding
    borderRadius: 5, // Add border radius
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  callButton: {
    backgroundColor: '#007BFF', // Change the background color to blue
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Add shadow for iOS
    shadowOpacity: 0.25, // Add shadow for iOS
    shadowRadius: 3.84, // Add shadow for iOS
  },
  messageButton: {
    backgroundColor: '#28a745', // Change the background color to green
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    elevation: 3, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Add shadow for iOS
    shadowOpacity: 0.25, // Add shadow for iOS
    shadowRadius: 3.84, // Add shadow for iOS
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18, // Increase the font size
    fontWeight: 'bold', // Make the text bold
  },
});

export default DetailScreen;

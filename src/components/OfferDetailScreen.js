// OfferDetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import Icon from 'react-native-vector-icons/Ionicons';

const OfferDetailScreen = ({ route, navigation }) => {
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
          <Text style={styles.userName}>{item.user.name}</Text>
        </View>
      )}

      <Text style={styles.postDate}>Posted on {item.postDate}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description:</Text>
        <Text>{item.desc}</Text>
      </View>

      {item.quantity !== '' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantity:</Text>
          <Text>{item.quantity}</Text>
        </View>
      )}

      {item.price !== '' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price:</Text>
          <Text>${item.price}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.callButton} onPress={() => console.log('Call')}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton} onPress={() => console.log('Message')}>
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
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    image: {
      width: '50', // Change this to width: 50,
      height: 200,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    userInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
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
      fontSize: 14,
      color: '#777',
      marginBottom: 5,
    },
    viewCount: {
      fontSize: 14,
      color: '#777',
      marginBottom: 10,
    },
    section: {
      marginBottom: 20,
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
      backgroundColor: 'blue',
      padding: 15,
      borderRadius: 8,
      flex: 1,
      marginRight: 10,
    },
    messageButton: {
      backgroundColor: 'green',
      padding: 15,
      borderRadius: 8,
      flex: 1,
      marginLeft: 10,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });

export default OfferDetailScreen;

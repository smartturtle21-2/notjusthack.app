// PostOfferScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Platform,
   
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '/src/components/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';

const PostOfferScreen = () => {
  const navigation = useNavigation();
  const { addPostedOffer, postedOffers } = useAppContext();
  const [details, setDetails] = useState('');
  const [desc, setdesc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newOffer = {
      details,
      desc,
      quantity,
      image,
      price,
      postDate: selectedDate.toLocaleDateString(),
      postViews: 0, // Initialize post views
      description,
      user: {
        name: 'Demo User',
        profileLogo: require('/src/assets/profile.png'), // Replace with your image file
      },
    };
    addPostedOffer(newOffer);
    setDetails('');
    setdesc('');
    setQuantity('');
    setImage('');
    setPrice('');
    setSelectedDate(new Date());
    setDescription('');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="black" />
        <Text style={{ color: 'black', marginLeft: 5 }}>Back to Main Screen</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Offer:</Text>
      <TextInput
        placeholder="I Offer"
        value={details}
        onChangeText={(text) => setDetails(text)}
        style={styles.input}
      />

      <Text style={styles.sectionTitle}>Enter Description:</Text>
      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={(text) => setdesc(text)}
        style={styles.input}
      />

      <Text style={styles.sectionTitle}>Quantity (optional):</Text>
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.sectionTitle}>Image URL:</Text>
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={(text) => setImage(text)}
        style={styles.input}
      />

      {image !== '' && <Image source={{ uri: image }} style={styles.imagePreview} />}

      

      {Platform.OS !== 'web' && (
        <>
          <Text style={styles.sectionTitle}>Select Date:</Text>
          <DatePickerIOS
            date={selectedDate}
            onDateChange={(date) => setSelectedDate(date)}
            mode="date"
            style={styles.datePicker}
          />
        </>
      )}

  

      <TouchableOpacity onPress={handleSubmit} style={styles.postButton}>
        <Text style={{ color: 'white' }}>Post Offer</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Posted Offers:</Text>
      <FlatList
        data={postedOffers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postedOfferContainer}
            onPress={() => navigation.navigate('OfferDetailScreen', { item })}
          >
            <Text>{item.details}</Text>
            <Text>{item.desc}</Text>
            {item.quantity !== '' && <Text>Quantity: {item.quantity}</Text>}
            {item.image !== '' && <Image source={{ uri: item.image }} style={styles.postedImage} />}
            {item.user && (
              <View style={styles.userInfoContainer}>
                <Image source={item.user.profileLogo} style={styles.userLogo} />
                <Text style={styles.userName}>John Doe</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5', // Add a background color
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#DDDDDD', // Add a background color
    padding: 10, // Add padding
    borderRadius: 5, // Add border radius
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333333', // Change the text color
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderColor: '#CCCCCC', // Change the border color
    borderRadius: 5, // Add border radius
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5, // Add border radius
  },
  postButton: {
    backgroundColor: '#007BFF', // Change the background color
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  datePicker: {
    marginBottom: 10,
  },
  postedOfferContainer: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#CCCCCC', // Change the border color
    backgroundColor: '#FFFFFF', // Add a background color
  },
  postedImage: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 5, // Add border radius
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    color: '#333333', // Change the text color
  },
});

export default PostOfferScreen;

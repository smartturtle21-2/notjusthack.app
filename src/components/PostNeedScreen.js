// PostNeedScreen.js
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

const PostNeedScreen = () => {
  const navigation = useNavigation();
  const { addPostedNeed, postedNeeds } = useAppContext();
  const [details, setDetails] = useState('');
  const [desc, setdesc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newNeed = {
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
        profileLogo: require('/src/assets/demo.png'), // Replace with your image file
      },
    };
    addPostedNeed(newNeed);
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

      <Text style={styles.sectionTitle}>Need:</Text>
      <TextInput
        placeholder="I need"
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

      <Text style={styles.sectionTitle}>Quantity if:</Text>
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.sectionTitle}>Image URL (optional):</Text>
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
        <Text style={{ color: 'white' }}>Post Need</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Posted Needs:</Text>
      <FlatList
        data={postedNeeds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postedNeedContainer}
            onPress={() => navigation.navigate('DetailScreen', { item })}
          >
            <Text>{item.details}</Text>
            <Text>{item.desc}</Text>
            {item.quantity !== '' && <Text>Quantity: {item.quantity}</Text>}
            {item.image !== '' && <Image source={{ uri: item.image }} style={styles.postedImage} />}
            {item.user && (
              <View style={styles.userInfoContainer}>
                <Image source={item.user.profileLogo} style={styles.userLogo} />
                <Text style={styles.userName}>{item.user.name}</Text>
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
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  datePicker: {
    marginBottom: 10,
  },
  postedNeedContainer: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  postedImage: {
    width: 50,
    height: 50,
    marginTop: 5,
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
  },
});

export default PostNeedScreen;

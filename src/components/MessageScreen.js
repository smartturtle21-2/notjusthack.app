// MessageScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import profileLogo from '/src/assets/profile.png'; // replace with the actual path to your image file

const MessageScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, { text: input, sent: true }]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="black" />
        <Text style={{ color: 'black', marginLeft: 5 }}>Back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={profileLogo} style={styles.userImage} />

        <Text style={styles.userName}>John Doe</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.message, item.sent ? styles.sent : styles.received]}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ECE5DD', // WhatsApp-like background color
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    maxWidth: '70%', // Limit the width of the message
  },
  sent: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // WhatsApp-like sent message color
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF', // WhatsApp-like received message color
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1, // Add a border at the top
    borderTopColor: '#B2AFAF', // Border color
    backgroundColor: '#FFFFFF', // White background
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginRight: 10,
  },
});

export default MessageScreen;

// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you have FontAwesome installed
import GoogleSignInButton from './GoogleSignInButton'; // Import or create your own Google Sign-In button component

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For demonstration, static login
    if (username === 'admin' && password === 'admin123@') {
      // Navigate to MainScreen on successful login
      navigation.replace('Main');
    } else {
      // Display an error message or handle authentication failure
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleSignUp = () => {
    // Navigate to SignUp screen
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={require('/workspaces/notjusthack.app/src/assets/demo.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to NAO</Text> {/* "NAO : Need And Offer" final app name not decided */}
        <View style={styles.inputContainer}>
          <FontAwesome name="user" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>


        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Add the Google Sign-In button here */}
        <GoogleSignInButton onPress={() => alert('Google Sign-In')} />

        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};




const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    fontFamily: 'Arial',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    width: 300,
  },
  icon: {
    fontSize: 20,
    color: '#555',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    color: '#333',
    fontFamily: 'Arial',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  signupText: {
    marginTop: 20,
    color: 'blue',
    fontSize: 16,
    fontFamily: 'Arial',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default LoginScreen;
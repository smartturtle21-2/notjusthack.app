// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you have FontAwesome installed

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      // Implement your signup logic here
      const response = await fetch('http://your-server-url/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.success) {
        // Navigate to Login screen after successful signup
        navigation.navigate('Login');
      } else {
        // Display an error message or handle signup failure
        setError(result.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
    }
  };

  const handleSignIn = () => {
    // Navigate to Login screen
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('/workspaces/notjusthack.app/src/assets/demo.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Psoolbr App</Text>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.formContainer}>
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
          <View style={styles.inputContainer}>
            <FontAwesome name="lock" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signinText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
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
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Adjusted text color for better visibility on a background image
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
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
  signupButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  signinText: {
    marginTop: 20,
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});

export default SignUpScreen;

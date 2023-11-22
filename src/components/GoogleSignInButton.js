// GoogleSignInButton.js
import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const GoogleSignInButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.googleSignInButton}>
      <Image source={require('/src/assets/Google.png')} style={styles.googleLogo} />
      <Text style={styles.googleSignInButtonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const GoogleSignupButton = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.googleSignInButton}>
        <Image source={require('/src/assets/Google.png')} style={styles.googleLogo} />
        <Text style={styles.googleSignInButtonText}>Sign up with Google</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  googleSignInButton: {
    backgroundColor: '#4285F4', // Google's brand color
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 200,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleSignInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});

export default GoogleSignInButton;

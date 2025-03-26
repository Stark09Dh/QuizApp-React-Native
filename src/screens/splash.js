import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const navigation = useNavigation();

  const handleButtonPress = () => {
    setButtonPressed(true);
    // Small delay to show button press feedback before navigation
    setTimeout(() => {
      navigation.replace('Questions'); // Replace current screen with Question screen
    }, 200);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://st3.depositphotos.com/23611030/35601/v/450/depositphotos_356017608-stock-illustration-quiz-game-icon-vector-quiz.jpg' }} 
        style={styles.logo} 
      />
      <Text style={styles.title}>Welcome to Quizzlet</Text>

      <TouchableOpacity
        style={[
          styles.button,
          buttonPressed && styles.buttonPressed
        ]}
        onPress={handleButtonPress}
        disabled={buttonPressed}
      >
        <Text style={styles.buttonText}>
          {buttonPressed ? 'Loading...' : 'Start Quiz'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 60,
    paddingTop: 10,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(77, 79, 234, 0.3)', // Matching your Question screen's green
    borderColor: '#03045e',
    borderRadius: 11,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: 'center',
    width: '80%',
  },
  buttonPressed: {
    backgroundColor: '#rgba(77, 79, 234, 0.3)', // Darker green when pressed
  },
  buttonText: {
    color: '#03045e',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Splash;
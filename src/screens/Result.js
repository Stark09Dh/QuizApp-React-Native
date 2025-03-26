import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Result = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const { score = 0, totalQuestions = 1 } = route.params || {};
  const incorrectAnswers = totalQuestions - score;
  const percentage = Math.round((score / totalQuestions) * 100);

  const handleHome = () => {
    navigation.replace('QuizzApp'); // Replace with your home screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Results</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your Score: {score} / {totalQuestions}</Text>
        <Text style={styles.correctText}>Correct Answers: {score}</Text>
        <Text style={styles.incorrectText}>Incorrect Answers: {incorrectAnswers}</Text>
        <Text style={styles.percentage}>{percentage}%</Text>
      </View>

      <Text style={styles.message}>
        {percentage >= 80 ? "Excellent job!" : 
         percentage >= 50 ? "Good effort!" : 
         "Keep practicing!"}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreText: {
    fontSize: 24,
    color: '#333',
    marginBottom: 10,
  },
  correctText: {
    fontSize: 20,
    color: '#388E3C', // Green
    marginBottom: 5,
  },
  incorrectText: {
    fontSize: 20,
    color: '#D32F2F', // Red
    marginBottom: 10,
  },
  percentage: {
    fontSize: 28,
    color: '#388E3C',
  },
  message: {
    fontSize: 20,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 11,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Result;
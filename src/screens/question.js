import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Question = () => {
  const navigation = useNavigation();
  
  const questions = [
    { question: "Which one of them is an Animal?", options: ['Purple', 'Parrot', 'Cheetah', 'Tomato'], correctAnswer: 'Cheetah' },
    { question: "What is the capital of France?", options: ['London', 'Berlin', 'Paris', 'Madrid'], correctAnswer: 'Paris' },
    { question: "Which planet is known as the Red Planet?", options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' },
    { question: "What is 2 + 2?", options: ['3', '4', '5', '6'], correctAnswer: '4' },
    { question: "Which color is the sky on a clear day?", options: ['Green', 'Red', 'Blue', 'Yellow'], correctAnswer: 'Blue' }
  ];

  const totalQuestions = questions.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (answer) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
    }
  };

  const handleButtonPress = () => {
    if (!isAnswered) {
      // Check answer, but don’t update score yet
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setAnswerStatus('correct');
      } else {
        setAnswerStatus('incorrect');
        setShowCorrectAnswer(true);
      }
      setIsAnswered(true);
    } else {
      // Calculate score for this question
      const questionScore = selectedAnswer === currentQuestion.correctAnswer ? 1 : 0;
      if (currentQuestionIndex < totalQuestions - 1) {
        // Update score and move to next question
        setScore(prevScore => prevScore + questionScore);
        setSelectedAnswer(null);
        setAnswerStatus(null);
        setIsAnswered(false);
        setShowCorrectAnswer(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Last question: update score and navigate
        const finalScore = score + questionScore;
        navigation.replace('Result', { 
          score: finalScore, // Pass the final score
          totalQuestions: totalQuestions 
        });
      }
    }
  };

  // Render logic remains unchanged (omitted for brevity, same as original)
  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedAnswer === option && styles.selectedOption,
              answerStatus === 'incorrect' && selectedAnswer === option && styles.incorrectOption,
              ((answerStatus === 'correct' && currentQuestion.correctAnswer === option) || 
               (showCorrectAnswer && currentQuestion.correctAnswer === option)) && styles.correctOption
            ]}
            onPress={() => handleOptionSelect(option)}
            disabled={selectedAnswer !== null}
          >
            <Text style={[
              styles.optionText,
              answerStatus === 'incorrect' && selectedAnswer === option && styles.incorrectText,
              ((answerStatus === 'correct' && currentQuestion.correctAnswer === option) || 
               (showCorrectAnswer && currentQuestion.correctAnswer === option)) && styles.correctText
            ]}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {showCorrectAnswer && (
        <Text style={styles.feedbackText}>
          Incorrect. The correct answer is: {currentQuestion.correctAnswer}
        </Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            !selectedAnswer && styles.buttonDisabled,
            answerStatus === 'correct' && styles.buttonCorrect,
            answerStatus === 'incorrect' && styles.buttonCorrect
          ]}
          onPress={handleButtonPress}
          disabled={!selectedAnswer}
        >
          <Text style={styles.buttonText}>
            {!isAnswered ? 'Check Your Answer' : 
             currentQuestionIndex < totalQuestions - 1 ? 'Next' : 'See Results'}
          </Text>
        </TouchableOpacity>
      </View>
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
  questionNumber: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  question: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  optionsContainer: {
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  option: {
    backgroundColor: 'transparent',
    borderColor: '#4285f4',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 24,
    marginBottom: 10,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    textAlign: 'center',
  },
  selectedOption: {
    borderColor: '#388E3C',
  },
  correctOption: {
    backgroundColor: 'rgba(76, 175, 80, 0.3)',
    borderColor: '#388E3C',
  },
  incorrectOption: {
    backgroundColor: 'rgba(244, 67, 54, 0.3)',
    borderColor: '#D32F2F',
  },
  optionText: {
    color: '#000',
    fontSize: 18,
  },
  correctText: {
    color: '#388E3C',
    fontWeight: 'bold',
  },
  incorrectText: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderColor: '#388E3C',
    borderRadius: 11,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 32,
    justifyContent: 'center',
    width: '80%',
  },
  buttonCorrect: {
    backgroundColor: '#388E3C',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonDisabled: {
    backgroundColor: '#B4D8B3',
    borderColor: '#A1D99B',
  },
  feedbackText: {
    fontSize: 16,
    color: '#D32F2F',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Question;
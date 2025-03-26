# Quizzlet

![Quizzlet Splash Screen](https://st3.depositphotos.com/23611030/35601/v/450/depositphotos_356017608-stock-illustration-quiz-game-icon-vector-quiz.jpg)

A simple React Native quiz application built with Expo and React Navigation, designed to test users' general knowledge through a single quiz with multiple-choice questions.

## Overview

Quizzlet is a mobile app that offers an engaging quiz experience. Users start at a splash screen, proceed to answer a series of questions, and view their results, including the number of correct and incorrect responses. The app ensures a linear flow by disabling back navigation, making it ideal for a focused quiz-taking experience.

## Features

- **Splash Screen**: Welcomes users with a "Start Quiz" button and an illustrative image.
- **Question Screen**: Presents 5 multiple-choice questions with immediate feedback (correct/incorrect) and option disabling after selection.
- **Result Screen**: Displays total score, correct/incorrect answer counts, percentage, and a motivational message, with a "Home" button to restart.
- **Navigation**: Seamless transitions between screens (Splash → Questions → Result → Splash) using React Navigation with back navigation disabled.
- **Styling**: Consistent UI with green buttons, color-coded feedback (green for correct, red for incorrect), and a clean layout.

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or Yarn
- Expo CLI (`npm install -g expo-cli`)
- An Android/iOS emulator or a physical device with the Expo Go app

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Stark09dh/QuizApp-React-Native.git
   cd QuizApp
2. **Install Dependencies:**
   ```bash
   npm install
3. **Start the Development Server:**
   ```bash
   expo start

## Quizzlet Project Structure
```
quizzlet/
├── App.js                  # Root component rendering the navigation stack
├── src/
│   ├── navigation/
│   │   └── Appnavigator.js # Navigation stack definition
│   └── screens/
│       ├── splash.js       # Splash screen component
│       ├── question.js     # Question screen with quiz logic
│       └── Result.js       # Result screen with score display
├── app.json                # Expo configuration file
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

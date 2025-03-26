import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/splash";
import Question from "../screens/question";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuizzApp">
        <Stack.Screen 
          name="QuizzApp" 
          component={Splash} 
          options={{ headerShown: false }} // Optional: hide header for splash
        />
        <Stack.Screen 
          name="Questions" 
          component={Question} 
          options={{ 
            title: 'Quiz',
            headerLeft: null // Disable back button
          }}
        />
        <Stack.Screen 
          name="Result" 
          component={Result} 
          options={{ 
            title: 'Results', 
            headerLeft: null // Optional: also disable back button on Result
          }}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default AppNavigator;
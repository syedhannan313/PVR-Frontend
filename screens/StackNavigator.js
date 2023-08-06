import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movie from './Movie';
import HomeScreen from './HomeScreen';
import Theater from './Theater';



const Stack = createNativeStackNavigator();


export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Movie" component={Movie} /> 
        <Stack.Screen name="Theater" component={Theater} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

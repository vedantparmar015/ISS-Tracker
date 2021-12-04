import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import StarScreen from './screens/StarMapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = 'Home'
        screenOptions = {{
          headerShown:false
        }}
      >
        <Stack.Screen name = 'Home' component = {HomeScreen}/>
        <Stack.Screen name = 'ISSLocation' component = {ISSLocationScreen}/>
        <Stack.Screen name = 'Meteors' component = {MeteorScreen}/>
        <Stack.Screen name = 'Stars' component = {StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

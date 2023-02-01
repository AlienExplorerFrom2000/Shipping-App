import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import TermsOfUseScreen from './src/screens/TermsOfUseScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sign In Page" component={SignInScreen}></Stack.Screen>
          <Stack.Screen name="Sign Up Page" component={SignUpScreen}></Stack.Screen>
          <Stack.Screen name="Forget Password Page" component={ForgetPasswordScreen}></Stack.Screen>
          <Stack.Screen name="Terms Of Use Page" component={TermsOfUseScreen}></Stack.Screen>
          <Stack.Screen name="Home Page" component={HomeScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

export default App;
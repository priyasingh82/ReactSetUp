import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/Signup";

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

export const HomeStackScreen = () => (
    <HomeStack.Navigator >
    <HomeStack.Screen name="Home" component={HomeScreen} options = {{title: "HomeScreen"}} />
    <HomeStack.Screen name="Details" component={DetailScreen} options = {{title: "Detail Screen"}} />
    <HomeStack.Screen name="Login" component={LoginScreen} options = {{title: "Login Screen"}} />
  </HomeStack.Navigator> 
  )
  export const LoginStackScreen = () => (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen} options = {{title: "Login Screen"}} />
      <LoginStack.Screen name="SignUp" component={SignUpScreen} options = {{title: "SignUp Screen"}} />
    </LoginStack.Navigator>
  )
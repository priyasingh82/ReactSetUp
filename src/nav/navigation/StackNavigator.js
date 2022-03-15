import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { HomeStackScreen, LoginStackScreen } from '../stacks/stackScreen';

const switchNavigator = createSwitchNavigator(
    {
        Home : HomeStackScreen,
        Login : LoginStackScreen,
    }
)

const StackNav = createAppContainer(switchNavigator);
export default StackNav;
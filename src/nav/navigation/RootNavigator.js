import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeStackScreen,LoginStackScreen } from '../stacks/stackScreen';
import RNBootSplash from 'react-native-bootsplash';
import { BottomTab } from './bottomTabs';
import StackNav from './StackNavigator';

const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();


const RootNavigator = () => {

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
    
    
     
      <StackNav/>
     
      
    </NavigationContainer>
  );
};

export default RootNavigator;
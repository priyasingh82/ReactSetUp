import React from 'react';
import { HomeStackScreen,LoginStackScreen } from '../stacks/stackScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export const BottomTab = () => (
 <Tabs.Navigator>
 <Tabs.Screen name="Home" component = {HomeStackScreen} />
 <Tabs.Screen name="Login" component= {LoginStackScreen} />
</Tabs.Navigator> 
)



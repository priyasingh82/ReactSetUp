import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LanguageSelectionScreen from './LanguageSelectionScreen';
import ContentScreen from './ContentScreen';

const Stack = createStackNavigator();

const Multilang = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelectionScreen">
        <Stack.Screen
          name="LanguageSelectionScreen"
          component={LanguageSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContentScreen"
          component={ContentScreen}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Multilang;
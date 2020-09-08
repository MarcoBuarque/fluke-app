import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './../scenes/Home';
import DataDetail from './../scenes/DataDetail';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DataDetail" component={DataDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

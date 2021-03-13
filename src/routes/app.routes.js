import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Pages/Home';

const App = createStackNavigator();

export default function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
}

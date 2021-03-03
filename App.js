import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {AppTabNavigator} from './components/AppTabNavigator'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import RecieverDetailsScreen from './screens/RecieverDetailsScreen'
export default function App() {
  return (
    <AppContainer/>
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
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  RecieverDetails:{screen:RecieverDetailsScreen},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer=createAppContainer(switchNavigator)
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import PianoScreen from './screens/PianoScreen';
import GuitarScreen from './screens/GuitarScreen';
import DrumsScreen from './screens/DrumsScreen';
import ViolinScreen from './screens/ViolinScreen';
import PianoLiveScreen from './screens/PianoLiveScreen';
import PianoVideoScreen from './screens/PianoVideoScreen';
import PianoOrderScreen from './screens/PianoVideoScreen';
import GuitarLiveScreen from './screens/GuitarLiveScreen';
import GuitarVideoScreen from './screens/GuitarVideoScreen';
import GuiatrOrderScreen from './screens/PianoVideoScreen';
import DrumsLiveScreen from './screens/DrumsLiveScreen';
import DrumsVideoScreen from './screens/DrumsVideoScreen';
import DrumsOrderScreen from './screens/DrumsOrderScreen';
import ViolinLiveScreen from './screens/ViolinLiveScreen';
import ViolinVideoScreen from './screens/ViolinVideoScreen';
import ViolinOrderScreen from './screens/ViolinOrderScreen';
import ShoppingCart from './ShoppingCart';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  // WelcomeScreen: WelcomeScreen,
  HomeScreen: HomeScreen,
  PianoScreen: PianoScreen,
  GuitarScreen: GuitarScreen,
  DrumsScreen: DrumsScreen,
  ViolinScreen: ViolinScreen,
  PianoLiveScreen: PianoLiveScreen,
  PianoVideoScreen: PianoVideoScreen,
  PianoOrderScreen: PianoOrderScreen,
  GuitarLiveScreen: GuitarLiveScreen,
  GuitarVideoScreen: GuitarVideoScreen,
  GuiatrOrderScreen:GuiatrOrderScreen,
  DrumsLiveScreen: DrumsLiveScreen,
  DrumsVideoScreen: DrumsVideoScreen,
  DrumsOrderScreen: DrumsOrderScreen,
  ViolinLiveScreen: ViolinLiveScreen,
  ViolinVideoScreen: ViolinVideoScreen,
  ViolinOrderScreen: ViolinOrderScreen,
  ShoppingCart: ShoppingCart
});

const AppContainer = createAppContainer(AppNavigator);

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/containers/Home.js';
import Wedding from './src/containers/Wedding.js';
import Merchant from './src/containers/Merchant.js';
import HotelDetail from './src/containers/HotelDetail.js';
import StoreDetail from './src/containers/StoreDetail.js';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  // 对应界面名称
  Home: {
    screen: Home,
    navigationOptions:{
      header:null,
      headerBackTitle:null,
    }
  },
  Wedding: {
    screen: Wedding,
    navigationOptions:{
      header:null,
    }
  },
  Merchant: {
    screen: Merchant,
    navigationOptions:{
      header:null,
    }
  },
  HotelDetail: {
    screen: HotelDetail,
    navigationOptions:{
      header:null,
    }
  },
  StoreDetail: {
    screen: StoreDetail,
    navigationOptions:{
      // header:null,
      headerTitle:'详情'
    }
  },
}, {
  headerMode: 'screen',
});

export default App;

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation-stack';
import WetherScreen from './src/WetherScreen';
import SearchScreen from './src/SeacrhBarScreeen';
import StartingScreen from './src/StartingScreen';
import AllFeatures from './src/AllFeatures';
import Language from './src/Language';
import RandomDate from './src/RandomDate';
import TimeMatchine from './src/TimeMatchine';
import DarkLightTheme from './src/DarkLightTheme';

const splashScreen = createStackNavigator({
  start: {
    screen: StartingScreen,
    navigationOptions: {
      header: null,
      headerBackTitle: null,
    },
  },
});

const AppStack = createStackNavigator(
  {
    two: {
      screen: WetherScreen,
      navigationOptions: {
        title: 'Wether',
        headerBackTitle: null,
        headerTitleStyle: {
          fontSize: 25,
          // color: '#000000',
        },
      },
    },
    search: {
      screen: SearchScreen,
      navigationOptions: {
        headerBackTitle: null,
        title: 'Search Location',
    
      },
    },
    Alldata: {
      screen: Language,
      navigationOptions: {
        headerBackTitle: null,
        title: 'Language',
      },
    },
    feature: {
      screen: AllFeatures,
      navigationOptions: {
        headerBackTitle: null,
        title: 'Settings',
      },
    },
    random: {
      screen: RandomDate,
      navigationOptions: {
        title: 'Calendar',
        headerBackTitle: null,
      },
    },
    time: {
      screen: TimeMatchine,
      navigationOptions: {
        title: 'Time Matchine',
      },
    },
    DLtheme: {
      screen: DarkLightTheme,
    },
  },

  {
    defaultNavigationOptions: ({screenProps}) => {
      const theme = screenProps.myProps;
      return {
        headerStyle: {
          backgroundColor: theme,
        },
         headerTintColor: 'white',
         
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:25,
        },
      };
    },
  },
);

const SwitchNavigator = createStackNavigator(
  {
    splashScreen: {
      screen: splashScreen,
    },
    AppstackScreen: {
      screen: AppStack,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(SwitchNavigator);

import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import WetherScreen from './src/WetherScreen' ;
import SearchScreen from './src/SeacrhBarScreeen'
import StartingScreen from './src/StartingScreen'
import AllFeatures from './src/AllFeatures';
import Language from './src/Language';
import RandomDate from './src/RandomDate';
import TimeMatchine from './src/TimeMatchine';
const AppStack= createStackNavigator({
   start:{
        screen:StartingScreen,
       navigationOptions:{
            header:null,
           headerBackTitle:null
       }
    },
    two:{
        screen:WetherScreen,
        navigationOptions:{
            title:'Wether',
            headerBackTitle:null,
            headerTitleStyle:{
                fontSize:25,
                color:'#000000'
            }
        },
    },
    search:{
        screen:SearchScreen,
        navigationOptions:{
            title:"Search Location"
        }
    },
    Alldata:{
        screen:Language,
        navigationOptions:{
            title:"Language"
        }
    },
    feature:{
        screen:AllFeatures,
        navigationOptions:{
            headerBackTitle:null,
            title:"Settings"
        }
    },
    random:{
        screen:RandomDate,
        navigationOptions:{
            title:"Calendar",
            headerBackTitle:null
        }
    },
    time:{
        screen:TimeMatchine,
        navigationOptions:{
            title:"Time Mathine"
        }
    }
})
export default createAppContainer(AppStack);
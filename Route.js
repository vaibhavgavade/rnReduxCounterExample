import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import MyFile from './src/myFile';
import WetherScreen from './src/WetherScreen' ;
import SearchScreen from './src/SeacrhBarScreeen'
import StartingScreen from './src/StartingScreen'

const AppStack= createStackNavigator({
    // one:{
    //     screen:MyFile,
    //     navigationOptions:{
    //             title:'Counter App',
    //             headerBackTitle:null,
    //         }
    // },

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
    }

})

export default createAppContainer(AppStack);
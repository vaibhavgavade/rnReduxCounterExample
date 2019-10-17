import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button} from './Button';
const WetherUpperButtons = ({props,searchPress,settingPress})=> {
    console.log("wetherProps are",props)
    
    const {viewStyles}=Container
    return(
    <View style={viewStyles} >
        <Button onPress={settingPress} >
            Settings
        </Button>
        <Button onPress={searchPress}>
            GoNext
        </Button>
    </View>
        );
    }

export  {WetherUpperButtons};

const Container = StyleSheet.create({
    viewStyles:{
        flexDirection:'row',
        paddingTop:10
    

    }
})
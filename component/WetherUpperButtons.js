import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button} from './Button';
const WetherUpperButtons = ({props,onpress})=> {
    console.log("wetherProps are",props)
    
           console.log("testing",onpress)
 
  
    const {viewStyles}=Container
    return(
    <View style={viewStyles} >
        <Button>
            Settings
        </Button>
        <Button onPress={onpress}>
            GoNext
        </Button>
    </View>
        );
    }

export  {WetherUpperButtons};

const Container = StyleSheet.create({
    viewStyles:{
        flexDirection:'row',
    

    }
})
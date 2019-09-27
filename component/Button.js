import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

const Button = ({onPress,props}) => {
    return(
    <TouchableOpacity onPress={onPress}>
             <Text>{props.children}</Text>
    </TouchableOpacity>
       
       
    )
}

export  {Button}



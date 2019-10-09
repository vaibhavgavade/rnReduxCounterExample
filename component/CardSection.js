import React from 'react';
import { View ,StyleSheet,Text} from 'react-native';
const CardSection = (props) => {
    const {viewStyle}=container
    return(
        
        <View style={viewStyle}>
     
            {props.children}
        </View>
        
);
}

export {CardSection};

const container=StyleSheet.create({
    viewStyle:{
        // flex:1,
        borderRadius:5,
        backgroundColor:'#ff4500',
        width:170,
        height:150,
       margin:10,
       paddingTop:15
}
})

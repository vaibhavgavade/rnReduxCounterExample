import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const AllButtons = ({title,onPress}) =>{ 
  const{viewStyles,textStyles,iconStyle }=Container
    return(
    <View style={viewStyles}>
      <TouchableOpacity>
            <Text style={textStyles}>{title}</Text>
    </TouchableOpacity >
      <TouchableOpacity onPress={onPress}
            style={{paddingLeft:10}} > 
            <Icon style={iconStyle} name="chevron-right" size={25} color="#1e90ff"/>
            </TouchableOpacity>
    </View>
);
}
export  {AllButtons};
const Container=StyleSheet.create({
    viewStyles:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'red',
        marginTop:20,
        marginLeft:10,
        marginRight:10,
        height:61,
        borderRadius:5,
        },
    textStyles:{
       justifyContent:'flex-start',
      margin:15,
      fontSize:20
        },
      iconStyle:{
            margin:15
      }  
  })
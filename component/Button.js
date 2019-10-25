import React from 'react';
import { Text,TouchableOpacity,StyleSheet} from 'react-native';
const Button = ({onPress,children}) => {
    const {buttonStyle,textStyle}=Styles
    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress} >
                <Text style={textStyle}>
                        {children}
                </Text>
        </TouchableOpacity>
);
}
const Styles=StyleSheet.create({
    buttonStyle:{
        marginTop:15,
        backgroundColor:'#ff4500',
        borderColor:'#1e90ff',
        borderWidth:1,
        marginLeft:30,
        marginRight:20,
        borderRadius:5,
        height:41,
        width:250,
       

},
   textStyle:{
        textAlign:'center',
        fontSize:20,
        color:'black',
        fontWeight:'600',
        color:'#000000',
        paddingTop:5
        }
})
export {Button};

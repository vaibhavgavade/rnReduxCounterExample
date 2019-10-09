import React from 'react';
import { Text, View,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {searchResult} from '../actions/MyAction'

const SearchBar=() => {
    const {viewStyles,inputStyles,searchButton}=Container
    return (
    <View style={viewStyles}>
        <TextInput
            autoCorrect={false}  
            placeholder="Enter the search text"
        />
        <TouchableOpacity style={searchButton} >
                <Icon  name="md-search" size={30} color="#000000"/>
        </TouchableOpacity>
    </View>
    );
}
export {SearchBar}
const Container=StyleSheet.create({
    viewStyles:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:51,
         borderBottomWidth:2,
        marginVertical:10,
        borderColor:'#000080',
    },
  searchButton:{
        padding:10,
        borderRadius:5
    }
})
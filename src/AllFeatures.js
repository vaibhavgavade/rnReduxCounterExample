import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {AllButtons} from '../component/AllButtons';
import {connect} from 'react-redux'
import {settingtheme} from '../actions/MyAction'
const COLOR="#ffc0cb"
class AllFeatures extends Component {
 themeFunction(){
      console.log("theme function called")
      const color=COLOR
        this.props.settingtheme(color)
}
dataNavigate(){
  setTimeout(()=>{
      this.props.navigation.navigate('two')
  },5000)
}
render() {
    const {theme}=this.props;
    console.log("&&&&&&&&&&&",theme)
      return (
        <View style={{flex:1,backgroundColor:theme }}>
          <AllButtons title="Theme" onPress={()=>{this.themeFunction();this.dataNavigate()}}/>
          <AllButtons title="Location"  onPress={()=>this.props.navigation.navigate('search')}/>
          <AllButtons title="Language"/>
          <AllButtons title="Time Matchine" onPress={()=>this.props.navigation.navigate('random')}/>
          <AllButtons title="Data Acess"/>
          <AllButtons title="Persistent"/>
          <AllButtons title="Google"/>
      </View>
    );
  }
}

const mapStateToProps=({myTheme})=>{
  const{theme}=myTheme
  return {theme}
}
export default connect(mapStateToProps,{settingtheme}) (AllFeatures)




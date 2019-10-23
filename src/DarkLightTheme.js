import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {CheckBox} from '../component/CheckBox';
import {CheBoxUnSelect} from '../component/cheBoxUnSelect';
import {settingtheme} from '../actions/MyAction';
const COLOR = '#000000';
const COLORS = '#b0c4de';
class DarkLightTheme extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',
      headerRight: (
        <TouchableOpacity
          style={{paddingRight: 20}}
          onPress={() => navigation.navigate('two')}>
          <Icon name="home" size={25} color="#ff1493" />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
      },
      //   headerStyle: {
      //     backgroundColor: navigation.getParams('theme'),
      //   },
    };
  };

  themeFunction() {
    console.log('theme function called');
    const color = COLOR;
    this.props.settingtheme(color);
  }
  themeFunctions() {
    console.log('theme function called');
    const color = COLORS;
    this.props.settingtheme(color);
  }
  dataNavigate() {
    this.props.navigation.navigate('DLtheme');
  }
  render() {
    return (
      <View style={{backgroundColor: this.props.theme, flex: 1}}>
        <CheckBox title="Dark Theme" onPress={() => this.themeFunction()} />
        <CheBoxUnSelect
          title="Light Theme"
          onPress={() => this.themeFunctions()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({myTheme}) => {
  console.log('darkLightTheme ', myTheme);
  const {theme} = myTheme;
  return {theme};
};

export default connect(
  mapStateToProps,
  {settingtheme},
)(DarkLightTheme);

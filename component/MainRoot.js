import React, {Component} from 'react';
import SwitchNavigator from '../Route';
import {connect} from 'react-redux';

const MainRoot = props => {
  return <SwitchNavigator screenProps={{myProps: props.theme}} />;
};
const mapStateToProps = ({myTheme}) => {
  const {theme} = myTheme;
  return {theme};
};

export default connect(
  mapStateToProps,
  null,
)(MainRoot);

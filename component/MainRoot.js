import React, {Component} from 'react';
import SwitchNavigator from '../Route';
import {connect} from 'react-redux';

class MainRoot extends Component {
  render() {
    console.log('^^^^^^^^^^^^', this.props.theme);
    return <SwitchNavigator screenProps={{myProps: this.props.theme}} />;
  }
}

const mapStateToProps = ({myTheme}) => {
  console.log('main roo ++++++++++++++++++|||||||||++++++++++++++', myTheme);
  const {theme} = myTheme;
  return {theme};
};

export default connect(
  mapStateToProps,
  null,
)(MainRoot);

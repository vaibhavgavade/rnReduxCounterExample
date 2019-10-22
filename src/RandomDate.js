import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Button} from '../component/Button';
import {connect} from 'react-redux';
import {changeDate} from '../actions/MyAction';
class RandomDate extends Component {
  state = {
    date: new Date(),
    isgoAhead: false,
  };
  onDismiss() {
    Alert.alert('Date Picker', 'please select date', [
      {
        text: 'ok',
      },
    ]);
  }
  render() {
    const {viewStyle, buttonStyle, buttonTextStyle} = Container;
    const {navigate} = this.props.navigation;

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: this.props.theme,
        }}>
        <DatePicker
          mode="date"
          style={{backgroundColor: '#ff69b4', width: 160, borderRadius: 5}}
          date={this.state.date}
          onDateChange={date => {
            var myDate = Math.floor(new Date(date).valueOf() / 1000);
            this.setState({date: date, isgoAhead: !this.state.isgoAhead});

            this.props.changeDate(
              this.props.lati,
              this.props.longi,
              this.props.loca,
              myDate,
            );
          }}
          placeholder="Select Date"
          confirmBtnText="Done"
          cancelBtnText="cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              right: 0,
              marginRight: 0,
            },
            dateInput: {
              marginLeft: 0,
            },
          }}
        />
        <TouchableOpacity
          style={buttonStyle}
          onPress={() =>
            this.state.isgoAhead ? navigate('time') : this.onDismiss()
          }>
          <Text style={buttonTextStyle}>GoWether</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = ({dateRe, myTheme}) => {
  console.log('date states is', dateRe);
  const {theme} = myTheme;
  const {lati, longi, loca, date} = dateRe;
  return {lati, longi, loca, date, theme};
};
export default connect(
  mapStateToProps,
  {changeDate},
)(RandomDate);
const Container = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonStyle: {
    width: 138,
    height: 35,
    backgroundColor: '#00bfff',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 18,
  },
});

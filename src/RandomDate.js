import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {Button} from '../component/Button';
import {connect} from 'react-redux';
import {changeDate} from '../actions/MyAction';
class RandomDate extends Component {
  state = {
    date: new Date(),
  };
  // convertEpoch = d => {
  //   var myDate = Math.floor(new Date(d).valueOf() / 1000);
  //   this.props.changeDate(
  //     this.props.lati,
  //     this.props.longi,
  //     this.props.loca,
  //     myDate,
  //   );
  // };
  render() {
    const {viewStyle, buttonStyle, buttonTextStyle} = Container;
    const {navigate} = this.props.navigation;

    return (
      <View style={viewStyle}>
        <DatePicker
          mode="date"
          date={this.state.date}
          onDateChange={date => {
            var myDate = Math.floor(new Date(date).valueOf() / 1000);
            this.setState({date: date});
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
              right: 6,
              marginRight: 0,
            },
            dateInput: {
              marginLeft: 0,
            },
          }}
        />
        <TouchableOpacity style={buttonStyle} onPress={() => navigate('time')}>
          <Text style={buttonTextStyle}>GoWether</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = ({dateRe}) => {
  console.log('date states is', dateRe);
  const {lati, longi, loca, date} = dateRe;
  return {lati, longi, loca, date};
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

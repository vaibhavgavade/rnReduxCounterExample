import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
} from 'react-native';
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
       
        <Image
          style={{height: 250, width: 180, borderRadius: 5,}}
          source={require('../asset/image/TimeMatchine.jpg')}
        />
         <Text style={{color:'white',marginTop:20, marginLeft:10,marginRight:10,fontSize:15}}>
          The Time Machine is a science fiction novella by H. G. Wells,
          published in 1895 and written as a frame narrative. The work 
          is generally credited with the popularization of the concept 
          of time travel by using a vehicle or device to travel purposely 
          and selectively forward or backward through time. 
        </Text>
        <DatePicker
          mode="date"
          style={{
            backgroundColor: '#ff69b4',
            width: 180,
            height: 51,
            borderRadius: 5,
            marginTop: 20,
          
          }}
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
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 10,
              right: 0,
              marginRight: 10,
              borderRadius: 5,
              backgroundColor: '#00bfff',
            },
            dateInput: {
              backgroundColor: '#dc143c',
              borderColor: '#00ff00',
              borderRadius: 5,
              margin: 5,
            },
            btnTextConfirm: {
              color: '#ff00ff',
              // backgroundColor: 'black',
              marginTop: 10,
              height: 30,
              width: 80,
              textAlign: 'center',
              borderRadius: 5,
              fontSize: 20,
            },
            btnTextCancel: {
              color: '#191970',
              // backgroundColor: 'black',
              marginTop: 10,
              height: 30,
              width: 80,
              textAlign: 'center',
              borderRadius: 10,
              fontSize: 20,
            },
            datePickerCon: {
              // backgroundColor: '#ff1493',
              borderRadius: 5,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 10,
              height: 210,
            },
            dateText: {
              fontSize: 15,
              color: '#191970',
              paddingLeft: 20,
            },
            dateTouchBody: {
              marginTop: 5,
              marginBottom: 5,
            },
            datePicker: {
              backgroundColor: '#9acd32',
            },
          }}
        />
        <TouchableOpacity
          style={buttonStyle}
          onPress={() =>
            this.state.isgoAhead ? navigate('time') : this.onDismiss()
          }>
          <Text style={buttonTextStyle}>SUBMIT</Text>
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
    width: 170,
    height: 45,
    backgroundColor: '#ff4500',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    paddingTop:10,
    paddingTop: 5,
    fontSize: 18,
  },
});

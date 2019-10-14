import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList,ScrollView} from 'react-native';
import  {WetherUpperButtons} from '../component/WetherUpperButtons'
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchData} from '../actions/MyAction';
import Card from '../component/Card';
import {CardSection} from '../component/CardSection';
import ImageSelect from '../component/ImageSelect';
import {Spinner} from '../component/Spinner';
import {withNavigation} from 'react-navigation'
import TimeConversion from '../component/TimeConverison';
class WetherScreen extends Component {
    componentDidMount(){
        this.focusListener=this.props.navigation.addListener("willFocus",()=>{
          this.fetchcalled()
        })
}
  componentWillUnmount(){
        this.focusListener.remove();
      }
fetchcalled(){
 this.props.fetchData(
    this.props.lat,
    this.props.long
  )
}          

render() {
 const {viewContainer,textStyle,imgStyle,iconStyles,titleStyles}=Container
    const {dataSource}=this.props;
    
    console.log("lat is iiiiiiiiiiiiiiiiiiiiii",this.props.dataSource.latitude)
    const {navigate}=this.props.navigation
    console.log("djfkdj",dataSource)
    if(this.props.isLoading){   
       return <Spinner size="large"/>
      }
      else{
    return (
          <View style={viewContainer}>
          <WetherUpperButtons onpress={()=>navigate('search')}/>
        <Icon style={iconStyles} name="md-rainy" size={150} color="#87cefa"/>
          <Text style={titleStyles}>{this.props.loc}</Text>
          {/* <Image source={ImageData.snowCloudy}/> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card
              header="Humidity"
              value={dataSource.currently.humidity}
              images={dataSource.currently.icon}
            />
            <Card
              header="Pressure"
              value={dataSource.currently.pressure}
              images={dataSource.currently.icon}
            />
             <Card
              header="windSpeed"
              value={dataSource.currently.windSpeed}
               images={dataSource.currently.icon}
            />
             <Card
              header="Temperature"
              value={dataSource.currently.temperature}
              images={dataSource.currently.icon}
            />
            <Card
              header="Ozone"
              value={dataSource.currently.ozone}
              images={dataSource.currently.icon}
              />
           </ScrollView>
         <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
              data={dataSource.daily.data}
              keyExtractor ={(kyes)=>kyes.dewPoint}
              renderItem={({item})=>(
              <CardSection>
                     <TimeConversion allDateTime={item.time}/>
                    <Text style={textStyle}>MaxTemp:{item.apparentTemperatureMax}</Text>
                    <Text style={textStyle}>MinTemp:{item.apparentTemperatureMin}</Text>
                    <ImageSelect img={item.icon}/> 
                  </CardSection>
                  )}
          />
        </View>
        );  
        }
  }
}
 const mapStateToProps=({loaderRe,update})=> {
   console.log("update reducer",update)
  console.log("Wether App state is",loaderRe)
  const {dataSource,isLoading}=loaderRe;
  const {lat,long,loc}=update
  return{dataSource,isLoading,lat,long,loc}
  }
export default connect(mapStateToProps,{fetchData})(WetherScreen)
const Container=StyleSheet.create({
  viewContainer:{
    marginTop:10
  },
    textStyle:{
       fontSize:15,
       paddingTop:10,
       paddingLeft:10,
       alignSelf:'center'
    },
textViewStyle:{
  flexDirection:'column'
},
careSctionStyle:{
  fontSize:16,
  paddingLeft:10,
  paddingRight:10
},
imgStyle:{
  height:50,
  width:50
},
iconStyles:{
alignSelf:'center'
  },
titleStyles:{
  fontSize:25,
  alignSelf:'center'
}
})


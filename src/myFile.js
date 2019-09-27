import React,{Component} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button} from '../component/Button';
import {connect} from 'react-redux';
import {CounterAction} from '../actions/MyAction';

class MyFile extends Component{

    renderReucer=()=>{
                this.props.CounterAction(count)
            }

render(){
        const{Container}=Styles
        
        return(
         <View style={Container}>
             <Button onPress={this.renderReucer}>
                 login
             </Button>
         <Text>{this.props}</Text>
         <Text>Descrement</Text>
     </View>
  )
}

}


const mapToStateProps=({data})=>{
    const{count}=data
       
}

export  default connect (mapToStateProps,{CounterAction})(MyFile);


const Styles=StyleSheet.create({
  Container:{
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  }
})



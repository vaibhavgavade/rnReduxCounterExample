import React,{Component} from 'react';
import { Text, View,TextInput,TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-elements'
import {connect} from 'react-redux';
import {searchResult} from '../actions/MyAction';
import {changeLoc} from '../actions/MyAction';
import {Spinner} from '../component/Spinner';
class SearchBarScreen extends Component{
    constructor(props){
            super(props)
        console.log("oooooooo",props)
            this.state={
                    inputText:'',
                  }
                }
textChanging=(text)=>{
        console.log("testonmg....",text)
            this.setState({
                        inputText:text
                })
                
        }      
        
       
        searchBarAction=()=>{
        console.log("search bar action in called in react native")
            if(this.state.inputText.trim() === " "){
                             return;
                      }else{
                        console.log("search result is being called")
                            this.props.searchResult(this.state.inputText)
                        }
                    }
testing(){
    if(this.props.loaderLoading){
        return <Spinner size="large"/>
        }
        else{
            console.log("test",this.props.data)
            console.log("test",this.props.data[0].display_name)
            return (
            
            <FlatList
        data={this.props.data}
        renderItem={({ item }) =>(
            <TouchableOpacity onPress={()=>{
                this.props.changeLoc(item.lat,item.lon,item.display_name);
            this.props.navigation.navigate('two')
        }
            }>
                    <Text style={{fontSize:30}}>{item.display_name}</Text>
                    <View style={{borderBottomWidth:0.5, borderBottomColor:'#000000'}}/>
        </TouchableOpacity>
            
        )}
        keyExtractor={item => item.lat}
      />
      
            );
         }
        }
render(){
 const {viewStyles,inputStyles,searchButton}=Container
        console.log("map to state props data updating is",this.props.data)

        
    return (
    <View>
        <View style={viewStyles}>
        <TextInput
            autoCorrect={false}  
            placeholder="Enter the search text"
            onChangeText={this.textChanging}
            multiline={true} 
            
        />
       
    <TouchableOpacity style={searchButton} onPress={this.searchBarAction} >
            <Icon  name="md-search" size={30} color="#000000"/>
    </TouchableOpacity>
        </View>
        {this.testing()}
    </View>
    );}
}
const mapStateToProps=({search})=>{
   const{data,loaderLoading}=search
    return { data,loaderLoading}
}
export default connect(mapStateToProps,{searchResult,changeLoc})(SearchBarScreen)
const Container=StyleSheet.create({
    viewStyles:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:51,
         borderBottomWidth:2,
        marginVertical:10,
        borderColor:'#000080',
        color:'red'
    },
  searchButton:{
        padding:10,
        borderRadius:5
    }
})
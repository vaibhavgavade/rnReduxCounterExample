import {COUNTER_INCREASE} from './Types';
import {COUNTER_DECREASE} from './Types';
import {FETCH_STARTED} from './Types';
import {FETCHING_SUCCESS} from './Types';
import {FETCHING_FAIL} from './Types';
import {SEARCH_START} from './Types';
import {SEARCH_SUCCESS} from './Types';
import {SEARCH_FAIL} from './Types'
import axios from 'axios';

export const CounterActionInc=(count)=>({
    type:COUNTER_INCREASE,
    payload:count 
})
export const CounterActionDec=(count)=>({
    type:COUNTER_DECREASE,
    payload:count
})

export const fetchData=()=>dispatch=>{
    const Api=`https://api.darksky.net/forecast/c7f15dc1a1352d23b77a6bfc97bd0bd6/37.8267,-122.4233`
    const request=axios.get(Api)
    console.log("fetchdata action called")
    
        dispatch({
            type:FETCH_STARTED
        })
     request.then((resdata)=>{
          dispatch({
                type:FETCHING_SUCCESS,
                payload:resdata.data
          })
          })
      .catch((err)=>{
            dispatch({
                type:FETCHING_FAIL, 
                payload:err
        
            })
      })
    
}

export const searchResult=()=>dispatch=>{
    const searchApi='https://api.locationiq.com/v1/autocomplete.php?key=YOUR_PRIVATE_TOKEN&q=Empire'
    const requestApi=axios.get(searchApi)
    dispatch({
        type:SEARCH_START
    })
    requestApi.then((resData)=>{
        dispatch({
            type:SEARCH_SUCCESS,
            payload:resData
        })
    })
    .catch((err)=>{
        dispatch({
            type:SEARCH_FAIL,
            payload:err
        })
    })

    type:SEARCH_RESULT
    payload:search
}

  


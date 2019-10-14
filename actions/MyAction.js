import {COUNTER_INCREASE} from './Types';
import {COUNTER_DECREASE} from './Types';
import {FETCH_STARTED} from './Types';
import {FETCHING_SUCCESS} from './Types';
import {FETCHING_FAIL} from './Types';
import {SEARCH_START} from './Types';
import {SEARCH_SUCCESS} from './Types';
import {SEARCH_FAIL} from './Types';
import {UPDATE_INFO} from './Types'
import axios from 'axios';
export const CounterActionInc=(count)=>({
    type:COUNTER_INCREASE,
    payload:count 
})

export const CounterActionDec=(count)=>({
    type:COUNTER_DECREASE,
    payload:count
})

export const fetchData=(lat,long)=>dispatch=>{
        
    // console.log(`loc:${loc} and lat:${lat} with long:${long}`)
    const key="c7f15dc1a1352d23b77a6bfc97bd0bd6"
    const Api=`https://api.darksky.net/forecast/${key}/${lat},${long}`
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
export const searchResult=(text)=>dispatch=>{
    console.log("sending text data is",text)
    const token='3cb12595867f70'
    
    console.log("search result called")
    const searchApi=`https://api.locationiq.com/v1/autocomplete.php?key=${token}&q=${text}&limit=10`
    console.log("search Api",searchApi)
    const requestApi=axios.get(searchApi)
    dispatch({
        type:SEARCH_START
        })
    requestApi
    .then((resData)=>{
        dispatch({
            type:SEARCH_SUCCESS,
            payload:resData.data
        })
    })
    .catch((err)=>{
        dispatch({
            type:SEARCH_FAIL,
            payload:err
        })
    })
}

export const changeLoc=(lat,long,loc)=>({
    type:UPDATE_INFO,
    payload:{lat,long,loc}
})
   



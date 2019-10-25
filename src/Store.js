import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from 'react-native'
import {rootReducer} from '../src/reducers/CombineReducer';
import {persistReducer, persistStore} from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['myTheme'],
// };
// const PersistReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(rootReducer, applyMiddleware(thunk));
// const persistor = persistStore(Store);
export {Store}

import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store';

const reducer = combineReducers({ // JS 对象 => immutable 对象
  header: headerReducer
});

export default reducer;


import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store';
import homeReducer from '../pages/home/store';
import detailReducer from '../pages/detail/store';
import loginReducer from '../pages/login/store';

const reducer = combineReducers({ // JS 对象 => immutable 对象
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;


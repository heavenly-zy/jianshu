import * as actionType from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({ // 把 state 对象转变为 immutable 对象（不可变更的对象）
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionType.SEARCH_FOCUS) {
    // 这里的 state.set() 并未修改原始的 state 对象，它会结合之前的 immutable 对象的值和新设置的值，来返回一个全新的对象
    return state.set('focused', true)
  }
  if (action.type === actionType.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state;
}
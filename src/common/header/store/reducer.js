import * as actionType from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({ // 把 state 对象转变为 immutable 对象（不可变更的对象）
  focused: false,
  list: [],
  mouseIn: false,
  currentPage: 0,
  totalPages: 1,
  spinIconActive: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionType.SEARCH_BLUR:
      return state.set('focused', false);
    case actionType.CHANGE_LIST:
      return state.merge({ // 等价于 state.set('list', action.data).set('totalPages', action.totalPages);
        'list': action.data,
        'totalPages': action.totalPages
      });
    case actionType.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionType.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionType.CHANGE_PAGE:
      return state.set('currentPage', action.page);
    case actionType.ICON_ACTIVE:
      return state.set('spinIconActive', action.spinIconActive);
    default:
      return state;
  }
}
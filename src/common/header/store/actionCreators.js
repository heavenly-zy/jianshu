import * as actionType from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionType.CHANGE_LIST,
  data: fromJS(data),
  totalPages: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionType.CHANGE_PAGE,
  page
});

export const iconActive = (spinIconActive) => ({
  type: actionType.ICON_ACTIVE,
  spinIconActive
});

export const getList = () => {
  return (dispatch) => { // 使用 redux-thunk 中间件才能返回函数
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data))
      })
      .catch(() => {
        console.log('request error')
      })
  }
}

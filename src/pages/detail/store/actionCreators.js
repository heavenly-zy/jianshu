import axios from 'axios';
import * as actionType from './actionType';

const changeDetail = (title, imgURL, content) => {
  return {
    type: actionType.CHANGE_DETAIL,
    title,
    imgURL,
    content
  }
}

export const getDetailData = () => {
  return (dispatch) => {
    axios.get('/api/detail.json')
      .then((res) => {
        const result = res.data.data
        dispatch(changeDetail(result.title, result.imgURL, result.content))
      })
  }
}
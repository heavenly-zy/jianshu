import axios from 'axios';
import * as actionType from './actionType';

const changeHomeData = (result) => {
  return {
    type: actionType.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
}

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res) => {
        const result = res.data.data;
        dispatch(changeHomeData(result))
      })
  }
}
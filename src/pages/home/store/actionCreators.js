import axios from 'axios';
import * as actionType from './actionType';
import { fromJS } from 'immutable';

const changeHomeData = (result) => {
  return {
    type: actionType.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
}

const addArticleList = (moreList) => {
  return {
    type: actionType.ADD_ARTICLE_LIST,
    list: fromJS(moreList)
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

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json')
      .then((res) => {
        const result = res.data.data;
        dispatch(addArticleList(result))
      })
  }
}
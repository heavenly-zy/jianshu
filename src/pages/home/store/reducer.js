import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: fromJS(action.nextPage)
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case actionType.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case actionType.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.showScroll)
    default:
      return state;
  }
}
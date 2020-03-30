import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <div className="banner-img"></div>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
} // UI组件---视图

const mapDispatch = (dispatch) => ({ // 容器组件---逻辑
  changeHomeData() {
    axios.get('/api/home.json')
      .then((res) => {
        const result = res.data.data;
        const action = {
          type: 'CHANGE_HOME_DATA',
          topicList: result.topicList,
          articleList: result.articleList,
          recommendList: result.recommendList
        }
        dispatch(action)
      })
  }
})

export default connect(null, mapDispatch)(Home);
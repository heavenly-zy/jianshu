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
import { connect } from 'react-redux';
import { actionCreators } from './store';

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
    dispatch(actionCreators.getHomeData())
  }
})

export default connect(null, mapDispatch)(Home);
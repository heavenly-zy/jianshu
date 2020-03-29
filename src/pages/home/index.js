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
}

export default Home;
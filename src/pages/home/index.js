import React, { PureComponent } from 'react';
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
import { BackTop } from './style';

class Home extends PureComponent {
  // PureComponent 相当于自己内部实现了一个 shouldComponentUpdate，因此使用 PureComponent 可以避免 render 函数重新渲染，从而提高性能
  // 另外，使用 PureComponent 的前提是你使用了 immutable.js 来管理数据
  handleScrollTop() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  }
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
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollToShow)
  }
} // UI组件---视图

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({ // 容器组件---逻辑
  changeHomeData() {
    dispatch(actionCreators.getHomeData())
  },
  changeScrollToShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true)) // scrollTop > 200 => 显示
    } else {
      dispatch(actionCreators.toggleTopShow(false)) // scrollTop <= 200 => 隐藏
    }
  }
})

export default connect(mapState, mapDispatch)(Home);
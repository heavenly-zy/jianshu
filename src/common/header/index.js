import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style.js';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const showSearchInfo = (props) => {
  const { focused, list, mouseIn, handleMouseEnter, handleMouseLeave } = props
  if (focused || mouseIn) { // 由 focused 和 mouseIn 共同来控制是否显示该区域
    return (
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          <span>热门搜索</span>
          <SearchInfoSwitch>
            <span>换一批</span>
          </SearchInfoSwitch>
        </SearchInfoTitle>
        {
          list.map((item) => {
            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
          })
        }
      </SearchInfo>
    )
  } else {
    return null;
  }
}

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <svg className="icon">
            <use xlinkHref="#icon-typeface"></use>
          </svg>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <svg className={focused ? 'icon focused' : 'icon'}>
            <use xlinkHref="#icon-magnifier"></use>
          </svg>
          {showSearchInfo(props)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <svg className="icon">
            <use xlinkHref="#icon-pen"></use>
          </svg>
          <span>写文章</span>
        </Button>
        <Button className="register">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => { // store => props
  return {
    focused: state.getIn(['header', 'focused']), // store.state.focused => this.props.focused
    // 等价于 state.get('header').get('focused')
    // 统一格式为 immutable 对象
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}
const mapDispatchToProps = (dispatch) => { // 组件通过 dispatch 改变 store 中的数据
  return {
    handleInputFocus() { // this.props.handleInputFocus => store
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getList());
    },
    handleInputBlur() { // this.props.handleInputBlur => store
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); // Header 组件与 store 建立连接
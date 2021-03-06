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
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store';

const showSearchInfo = (props) => {
  const { focused, list, mouseIn, currentPage, spinIconActive, totalPages, handleMouseEnter, handleMouseLeave, handleChangePage } = props;
  const newList = list.toJS(); // 这一步是为了把 immutable 的 list 转化为普通 JS 的 list
  const pageList = [];
  for (let i = currentPage * 10; i < (currentPage + 1) * 10; i++) {
    if (newList[i]) { // 保证每一项不为空
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
  };
  if (focused || mouseIn) { // 由 focused 和 mouseIn 共同来控制是否显示该区域
    return (
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          <span>热门搜索</span>
          <SearchInfoSwitch onClick={() => { handleChangePage(currentPage, totalPages, spinIconActive) }}>
            <svg className={spinIconActive ? 'icon active' : 'icon'}>
              <use xlinkHref="#icon-spin"></use>
            </svg>
            <span>换一批</span>
          </SearchInfoSwitch>
        </SearchInfoTitle>
        {pageList}
      </SearchInfo>
    )
  } else {
    return null;
  }
}

const Header = (props) => {
  const { focused, list, loginStatus, logout, handleInputFocus, handleInputBlur } = props
  return (
    <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        {
          loginStatus ? <NavItem className="right" onClick={logout}>退出</NavItem> : <Link to='/login'><NavItem className="right">登录</NavItem></Link>
        }
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
              onFocus={() => { handleInputFocus(list) }}
              onBlur={handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <svg className={focused ? 'icon focused zoom' : 'icon zoom'}>
            <use xlinkHref="#icon-magnifier"></use>
          </svg>
          {showSearchInfo(props)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to='/write'>
          <Button className="writting">
            <svg className="icon">
              <use xlinkHref="#icon-pen"></use>
            </svg>
            <span>写文章</span>
          </Button>
        </Link>
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
    mouseIn: state.getIn(['header', 'mouseIn']),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPages: state.getIn(['header', 'totalPages']),
    spinIconActive: state.getIn(['header', 'spinIconActive']),
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}
const mapDispatchToProps = (dispatch) => { // 组件通过 dispatch 改变 store 中的数据
  return {
    handleInputFocus(list) { // this.props.handleInputFocus => store
      dispatch(actionCreators.searchFocus());
      (list.toJS().length === 0) && dispatch(actionCreators.getList());
    },
    handleInputBlur() { // this.props.handleInputBlur => store
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(currentPage, totalPages, spinIconActive) {
      spinIconActive = !spinIconActive
      dispatch(actionCreators.iconActive(spinIconActive));
      if (currentPage < (totalPages - 1)) {
        dispatch(actionCreators.changePage(currentPage + 1)); // 注意：currentPage !== 3
      } else {
        dispatch(actionCreators.changePage(0));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); // Header 组件与 store 建立连接
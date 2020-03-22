import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
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
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <svg className={this.props.focused ? 'icon focused' : 'icon'}>
              <use xlinkHref="#icon-magnifier"></use>
            </svg>
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
}

const mapStateToProps = (state) => { // store => props
  return {
    focused: state.focused // store.state.focused => this.props.focused
  }
}
const mapDispatchToProps = (dispatch) => { // 组件通过 dispatch 改变 store 中的数据
  return {
    handleInputFocus() { // this.props.handleInputFocus => store
      const action = {
        type: 'search_focus'
      }
      dispatch(action);
    },
    handleInputBlur() { // this.props.handleInputBlur => store
      const action = {
        type: 'search_blur'
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); // Header 组件与 store 建立连接
import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
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
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <svg className={this.state.focused ? 'icon focused' : 'icon'}>
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
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;
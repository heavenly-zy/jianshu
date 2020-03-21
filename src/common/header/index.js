import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';

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
            <NavSearch>
            </NavSearch>
            <svg className="icon">
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

export default Header;
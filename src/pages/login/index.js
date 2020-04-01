import React, { PureComponent } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { loginStatus, login } = this.props;
    if (loginStatus) { // 已登录，则重定向到首页
      return <Redirect to='/' />
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => { this.input = input }} />
            <Input placeholder="密码" type='password' ref={(password) => { this.password = password }} />
            <Button onClick={() => { login(this.input, this.password) }}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(accountElem, passwordElem) {
      dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Login);
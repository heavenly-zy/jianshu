import axios from 'axios';
import * as actionType from './actionType';

const changeLogin = () => {
  return {
    type: actionType.CHANGE_LOGIN,
    loginStatus: true
  }
}

export const logout = () => {
  return {
    type: actionType.LOGOUT,
    loginStatus: false
  }
}

export const login = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin())
        } else {
          alert('登录失败')
        }
      })
  }
}
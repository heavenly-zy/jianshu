> 这是一个基于 React 的初级练手项目（仿简书）

# 开发
```sh
yarn start
```

# 打包
```sh
yarn build
```

# 技术栈
- [x] React@16
- [x] react-redux
- [x] redux-thunk
- [x] react-router-dom
- [x] redux-immutable
- [x] styled-components
- [x] immutable.js

---

以下是我对项目中涉及到的重要知识点的记录~~

# styled-components 的用法

- 安装

  ```sh
  yarn add styled-components
  ```

- 样式写在 style.js 中

  ```js
  // style.js
  import styled from 'styled-components';
  
  export const HeaderWrapper = styled.div`
    // 样式
  `;
  
  // 添加属性的写法
  export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
    &::placeholder {
      color: #999;
    }
    &.focused {
      width: 240px;
    }
  `;
  ```

- 在 index.js 中引入，以组件的形式使用

  ```react
  // index.js
  import { HeaderWrapper, NavSearch } from './style.js';
  
  class Home extends Component {
    render() {
      return (
        <HomeWrapper>
          <NavSearch></NavSearch>
        </HomeWrapper>
      )
    }
  } 
  ```
  
- 定义全局样式

  ```react
  // style.js 中定义全局样式
  export const GlobalStyle = createGlobalStyle`
    // 全局样式
  `;
  
  // index.js 中以标签 <GlobalStyle /> 的形式来使用
  ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ```

# react-transition-group 的简单使用

- 安装

  ```sh
  yarn add react-transition-group
  ```

- 使用

  ```react
  // index.js
  import { CSSTransition } from 'react-transition-group';
  
  <CSSTransition
    in={this.state.focused}
    timeout={200}
    classNames="slide"
  >
    <NavSearch></NavSearch>
  </CSSTransition>
  
  ```

- style.js 中添加动画

  ```js
  export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
    &.slide-enter {
      transition: all 0.2s linear;
    }
    &.slide-enter-active {
      width: 240px;
    }
    &.slide-exit {
      transition: all 0.2s linear;
    }
    &.slide-exit-active {
      width: 160px;
    }
  `;
  ```

# 使用 react-redux 进行数据管理

- 安装

  ```sh
  yarn add redux
  yarn add react-redux
  ```

- <Provider>  组件

  ```react
  // App.js
  import Header from './common/header/index.js';
  import store from './store';
  import { Provider } from 'react-redux';
  
  class App extends Component {
    render() {
      return (
        <Header />
        {/* React-Redux 提供 Provider 组件，可以让包裹在 <Provider> 内部的容器组件拿到 state */}
        <Provider store={store}> 
          <Header />
        </Provider>
      )
    }
  }
  ```

- UI 组件与容器组件。外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。

  ```react
  import { connect } from 'react-redux';
  
  // UI 组件---呈现视图
  class App extends Component {
    const { focused, handleInputFocus } = this.props
    render() {
      // focused <==> this.props.focused
      // onClick={handleInputFocus} <==> onClick={ this.props.handleInputFocus } 
    }
  }
  
  // 容器组件---管理数据和逻辑
  const mapStateToProps = (state) => { // 建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系
    return {
      focused: state.focused // state.focused => this.props.focused
    }
  }
  const mapDispatchToProps = (dispatch) => { // 建立UI组件的参数到store.dispatch方法的映射
    return {
      handleInputFocus() { // this.props.handleInputFocus => store.dispatch
        const action = {
          type: 'search_focus'
        }
        dispatch(action);
      },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App); // App（UI组件）通过connect（容器组件）与 store 建立连接
  ```

# 无状态组件

```react
// 普通组件
class Header extends Component {
  render() {
    return (
     {/* this.props.xxx */}
    )
  }
}
 
// 无状态组件
// 没有 refs 属性，没有生命周期，性能高于普通组件
const Header = (props) => {
  return (
   {/* props.xxx */}
  )
}
```

# 启用 redux-devtools-extension

```js
// src/store/index.js
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
```

# 使用 combineReducers 完成对数据的拆分管理

```js
// src/store/reducer.js
import { combineReducers } from 'redux';
import headerReducer from '../common/header/store';

const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
```

注意拆分之后，从 state 中取数据的方式发生变化

```js
const mapStateToProps = (state) => { 
  return {
    // state.focused ==> state.header.focused
    focused: state.header.focused
  }
}
```

# 使用 immutable.js 来管理 store 中的数据

- 安装

  ```sh
  yarn add immutable
  ```

- 用法

  ```js
  const defaultState = fromJS({ // 把 state 对象转变为 immutable 对象（不可变更的对象）
    focused: false
  });
  ```

- 变为 immutable 对象之后，不能简单地以`.`的形式来读属性了，需使用 immutable.js 提供的`get`和`set`

  ```js
  // get('xxx')
  const mapStateToProps = (state) => {
    return {
      // state.header ==> state.header.get('focused')
      focused: state.header.get('focused') 
    }
  }
  
  // set('xxx', newValue)
  export default (state = defaultState, action) => {
    if (action.type === actionType.SEARCH_FOCUS) {
      // 注意：这里的 state.set() 并未修改原始的 state 对象，它会结合之前的 immutable 对象的值和新设置的值，来返回一个全新的对象
      return state.set('focused', true)
    }
  }
  
  ```

- 连续`.get`或连续`.set`

  ```js
  // state.get('header').get('focused')
  state.getIn(['header', 'focused'])
  
  // state.set('list', action.data).set('totalPages', action.totalPages);
  state.merge({ 
    'list': action.data,
    'totalPages': action.totalPages
  });
  ```

  

# 使用 redux-immutable 统一数据格式

虽然我用 immutable.js 把 Header 组件的 state 变成了一个 immutable 对象，但最外层的 state 依旧是一个 JS 对象，数据格式不统一

```js
const mapStateToProps = (state) => {
  return {
    // state.header --- 以 . 的形式取属性，说明外层的 state 是一个 JS 对象
    // header.get('focused') --- 以 get 的形式取属性，说明 header 是一个 immutable 对象
    focused: state.header.get('focused') 
  }
}
```

我这里借助 redux-immutable 这个第三方库来统一一下数据格式（统一为 immutable 对象）

- 安装

  ```sh
  yarn add redux-immutable
  ```

- 从`redux-immutable`中引入`combineReducers`

  ```js
  // 之前是 import { combineReducers } from 'redux';
  import { combineReducers } from 'redux-immutable';
  import headerReducer from '../common/header/store';
  
  const reducer = combineReducers({ // JS 对象 => immutable 对象
    header: headerReducer
  });
  ```

- 统一为 immutable 对象之后

  ```js
  focused: state.header.get('focused') ==>focused: state.getIn(['header', 'focused'])
  ```

# 使用 Redux-thunk 中间件发送 AJAX 请求

- 安装

  ```sh
  yarn add redux-thunk
  ```

- 使用 redux-thunk 中间件

  ```js
  // src/store/index.js
  // 之前是 import { createStore, compose } from 'redux';
  import { createStore, compose, applyMiddleware } from 'redux';
  import reducer from './reducer';
  import thunk from 'redux-thunk';
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // 之前是 const store = createStore(reducer, composeEnhancers());
  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
  
  export default store; 
  ```

- src/common/header/index.js

  ```js
  import { actionCreators } from './store';
  
  const mapDispatchToProps = (dispatch) => { 
    return {
      handleInputFocus() {
        dispatch(actionCreators.getList());
      },
    }
  }
  ```

- actionCreators.js

  ```js
  import * as actionType from './actionType';
  import axios from 'axios';
  import { fromJS } from 'immutable';
  
  export const changeList = (data) => ({
    type: actionType.CHANGE_LIST,
    data: fromJS(data)
  })
  
  export const getList = () => {
    return (dispatch) => { // 使用 redux-thunk 中间件才能返回函数
      axios.get('/api/headerList.json')
        .then((res) => {
          const data = res.data;
          dispatch(changeList(data.data))
        })
        .catch(() => {
          console.log('request error')
        })
    }
  }
  ```

- actionType.js

  ```js
  export const CHANGE_LIST = 'header/CHANGE_LIST';
  ```

# 项目中 react-router-dom 的使用

- 安装

  ```sh
  yarn add react-router-dom
  ```

- src/App.js

  ```react
  import { BrowserRouter, Route } from 'react-router-dom';
  
  class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
              {/* 动态路由传参，其他组件中通过 this.props.match.params.id 拿到参数 id */}
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </BrowserRouter>
        </Provider>
      )
    }
  }
  ```

- 使用 link 标签进行跳转，Redirect 重定向

  ```react
  import { Link, Redirect } from 'react-router-dom';
  
  // 跳转至首页
  <Link to='/'>
    <Logo />
  </Link>
  // 重定向至首页
  <Redirect to='/' />
  ```

# 使用 react-loadable 来异步加载组件

- 安装

  ```sh
  yarn add react-loadable
  ```

- src/App.js

  ```js
  // 之前是 import Home from './pages/home';
  import Home from './pages/home/loadable';
  ```

- 用 withRouter 来解决获取不到路由的问题

  ```js
  import { withRouter } from 'react-router-dom';
  
  // 被 withRouter 包裹的组件能够获取路由参数
  export default connect(mapState, mapDispatch)(withRouter(Home));
  ```

# 使用 PureComponent 来提升组件性能

```react
// 以前是 import React, { Component } from 'react';
import React, { PureComponent } from 'react';

// 以前是 class Detail extends Component {}
class Detail extends PureComponent {}
```

PureComponent 相当于自己内部实现了一个 shouldComponentUpdate，因此使用 PureComponent 可以避免 render 函数重新渲染，从而提高性能；

> 注意：使用 PureComponent 的前提是你使用了 immutable.js 来管理数据




import React, { Component } from 'react';
import Header from './common/header/index.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/loadable';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';
import Write from './pages/write/loadable';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

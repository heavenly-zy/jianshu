import React, { PureComponent } from 'react';
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>ES6 新增数据类型</Header>
        <Content>
          <img src={require('../../statics/banner.png')} alt="banner" />
          <p><b>ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。</b><br/>它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</p>
          <p><b>ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。</b><br/>它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</p>
          <p><b>ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。</b><br/>它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</p>
          <p><b>ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。</b><br/>它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail;
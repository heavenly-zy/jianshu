import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            // require一个模块的时候，如果在require中包含变量，写法如下
            const imgURL = require(`../../../${item.get('imgURL')}`);
            return (
              <TopicItem key={item.get('id')} imgURL={imgURL}>
                <div className="topic-pic"></div>
                <span>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
};

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);
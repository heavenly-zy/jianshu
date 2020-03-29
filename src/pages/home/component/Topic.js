import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')} imgURL={item.get('imgURL')}>
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
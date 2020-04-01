import React, { PureComponent } from 'react';
import {
  DetailWrapper,
  Header,
  Content
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <img src={this.props.imgURL} alt="banner" style={{ width: '100%' }} />
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id)
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    imgURL: state.getIn(['detail', 'imgURL']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetailData(routeId) {
      dispatch(actionCreators.getDetailData(routeId))
    }
  }
}
// 被 withRouter 包裹的组件能够获取路由参数
export default connect(mapState, mapDispatch)(withRouter(Detail));
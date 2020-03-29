import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgURL: require("../../../statics/topic1.png")
    },
    {
      id: 2,
      title: '手绘',
      imgURL: require("../../../statics/topic2.png")
    },
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
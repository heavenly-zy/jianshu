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
    }
  ],
  articleList: [
    {
      id: 1,
      title: '批量查找并提取文件就用它了！',
      desc: '光速文件批量搜索器 其实看名字应该就知道用来干什么的了。这个软件可以批量快速准确的定位并且复制需要查找的文件，在你需要大量查找文件，并且把文件提...',
      imgURL: require("../../../statics/topic1.png")
    },
    {
      id: 2,
      title: 'Typora-Markdown语法手册',
      desc: '最近花了比较多时间打磨我的高效写作输出组合，用模板打破Markdown与富文本的藩篱，甚至最快可以1s排版微信公众号图文，这样就意味着可以花更少...',
      imgURL: require("../../../statics/topic1.png")
    }
  ],
  recommendList: [
    {
      id: 1,
      imgURL: require("../../../statics/recommend1.png")
    },
    {
      id: 2,
      imgURL: require("../../../statics/recommend2.png")
    },
    {
      id: 3,
      imgURL: require("../../../statics/recommend3.png")
    },
    {
      id: 4,
      imgURL: require("../../../statics/recommend4.png")
    },
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
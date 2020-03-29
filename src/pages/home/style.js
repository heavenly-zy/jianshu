import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flow-root;
  width: 980px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    background-image: url(${require("../../statics/banner.png")});
    background-position: center center;
    background-size: cover;
  }
`

export const HomeRight = styled.div`
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    background-image: url(${(props) => { return props.imgURL }});
    background-position: center center;
    background-size: contain;
    width: 32px;
    height: 100%;
    margin-right: 10px;
    float: left;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 5px;
    object-fit: cover;
  }
`

export const ListInfo = styled.div`
  max-width: 458px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin: 5px 0;
  background: url(${(props) => props.imgURL});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 280px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

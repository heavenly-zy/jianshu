import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
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
  width: 240px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
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

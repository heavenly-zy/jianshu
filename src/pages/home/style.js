import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  border: 1px solid red;
`

export const HomeLeft = styled.div`
  border: 1px solid green;
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
border: 1px solid yellow;
  width: 240px;
  float: right;
`
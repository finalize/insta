import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  &::before {
    background-color: rgba(0,0,0,.0975);
    bottom: -1px;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
  }

  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 600;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  flex-direction: column;

  .headerInner {
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;
    padding: 0 16px;
  }

  .uploadBox {
    flex-basis: 20%;
    flex-direction: row;
  }

  .uploadBtn {
    background: 0 0;
    border: 0;
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 18px;
  }

  .uploadIcon {
    display: block;
    background-image: url(../images/icons2.png);
    background-repeat: no-repeat;
    background-size: 337px 298px;
    background-position: -175px -224px;
    height: 24px;
    width: 24px;
  }

  h1 {
    align-items: center;
    color: #262626;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    min-width: 0;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      display: block;
      background-image: url(../images/icons2.png);
      background-repeat: no-repeat;
      background-size: 337px 298px;
      background-position: -92px -71px;
      height: 29px;
      width: 103px;
    }
  }

  .direct {
    display: flex;
    justify-content: flex-end;
    flex-basis: 20%;
    flex-direction: row;

    span {
      display: block;
      background-image: url(../images/icons2.png);
      background-repeat: no-repeat;
      background-size: 337px 298px;
      background-position: -225px -199px;
      height: 24px;
      width: 24px;
    }
  }
`;

export default class Header extends React.Component {

  render() {
    return (
      <HeaderWrap>
        <div className="headerInner">
          <div className="uploadBox">
            <button className="uploadBtn"><span className="uploadIcon"></span></button>
          </div>
          <h1><a href="/"><span></span></a></h1>
          <div className="direct"><a href="#"><span></span></a></div>
        </div>
      </HeaderWrap>
    )
  }
}
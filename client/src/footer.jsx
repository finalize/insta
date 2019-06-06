import React from "react";
import styled from "styled-components";
import Upload from "./upload";

const FooterWrap = styled.div`
  &::before {
    background: rgba(0,0,0,.0975);
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: -1px;
  }

  background-color: #fff;
  border: 0;
  bottom: 0;
  height: 44px;
  left: 0;
  position: fixed;
  right: 0;
  top: auto;
  user-select: none;
  z-index: 10;

  .footerInner, a {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  a {
    justify-content: center;
  }

  .footerItem {
    webkit-box-flex: 1;
    flex-grow: 1;
    height: 100%;
    justify-content: center;

    span {
      display: block;
      background-image: url(../images/icons2.png);
      background-repeat: no-repeat;
      background-size: 337px 298px;
      height: 24px;
      width: 24px;

      &.footerIcon1 {
        background-position: -263px -150px;
      }
      &.footerIcon2 {
        background-position: -150px -274px;
      }
      &.footerIcon3 {
        background-position: -288px -75px;
      }
      &.footerIcon4 {
        background-position: -263px -125px;
      }
      &.footerIcon5 {
        background-position: -263px 0;
      }
    }
  }
`;

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
    }
  }

  renderModal() {
    return this.state.isDisplay && <Upload/>
  }

  render() {
    return (
      <FooterWrap>
        {this.renderModal()}
        <div className="footerInner">
          <div className="footerItem"><a href="#"><span className="footerIcon1"></span></a></div>
          <div className="footerItem"><a href="#"><span className="footerIcon2"></span></a></div>
          <div className="footerItem">
            <a href="#"
              onClick = {
                () => {
                  this.setState({isDisplay: !this.state.isDisplay});
                }
              }
            >
              <span className="footerIcon3"></span>
            </a></div>
          <div className="footerItem"><a href="#"><span className="footerIcon4"></span></a></div>
          <div className="footerItem"><a href="#"><span className="footerIcon5"></span></a></div>
        </div>
      </FooterWrap>
    )
  }
}
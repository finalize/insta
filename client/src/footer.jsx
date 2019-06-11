import React from "react";
import styled from "styled-components";
import axios from "axios";
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

  .footerInner, a, label {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  a, label {
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
    super(props)
    this.state = {
      imagePath: undefined,
      isDisplay: false,
    }
    this.setDisplay = this.setDisplay.bind(this)
  }

  setDisplay(b) {
    this.setState({isDisplay: b})
  }

  sendUpload() {
    const params = new FormData();
    const fileSelectDom = this.refs.image;

    params.append('image', fileSelectDom.files[0]);

    axios
      .post(`${location.protocol}//${location.hostname}${location.port}/photos/upload`, params)
      .then(
        (val) => {
          const rowPath = val.data.file.path;
          this.setState({imagePath: rowPath.replace('public/', '')})
        }
      )
  }

  renderModal() {
    return this.state.isDisplay && (
      <Upload
        imagePath = {this.state.imagePath}
        setDisplay = {this.setDisplay}
      />
    )
  }

  render() {
    return (
      <FooterWrap>
        {this.renderModal()}
        <div className="footerInner">
          <div className="footerItem"><a href="#"><span className="footerIcon1"></span></a></div>
          <div className="footerItem"><a href="#"><span className="footerIcon2"></span></a></div>
          <div className="footerItem">
            <label htmlFor="image">
              <span className="footerIcon3">
                <input type="file" id="image" name="image" ref="image" hidden
                  onChange = {
                    () => {
                      this.sendUpload();
                      this.setState({isDisplay: !this.state.isDisplay});
                    }
                  }
                />
              </span>
            </label>
          </div>
          <div className="footerItem"><a href="#"><span className="footerIcon4"></span></a></div>
          <div className="footerItem"><a href="#"><span className="footerIcon5"></span></a></div>
        </div>
      </FooterWrap>
    )
  }
}
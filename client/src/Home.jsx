import React from "react";
import styled from "styled-components";
import Form from "./form";
import Top from "./top";

const LoginArea = styled.div`
  color: #262626;
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 18px;
`;

const RegistPad = styled.div`
  color: #262626;
  margin: 15px;
  text-align: center;
`;

const LoginPad = styled.div`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;

  h1 {
    background-image: url(../images/icons.png);
    background-repeat: no-repeat;
    background-size: 520px auto;
    background-position: -152px -116px;
    height: 51px;
    width: 175px;
    margin: 22px auto 36px;
  }
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      uid: undefined,
    }

    this.setUid = this.setUid.bind(this);
  }

  setUid (n) {
    this.setState({uid: n});
    localStorage.setItem('uid', n);
  }

  componentDidMount() {
    if ( localStorage.getItem('uid') ) {
      this.setState({uid: localStorage.getItem('uid')});
    }
  };

  render () {
    if ( this.state.uid ) {
      return <Top/>;
    } else {
      return <LoginArea>
        <LoginPad>
          <h1></h1>
          <Form
            setUid = {
              this.setUid
            }
          />
        </LoginPad>
        <LoginPad>
          <RegistPad>
            アカウントをお持ちでないですか？ <a href="#">登録する</a>
          </RegistPad>
        </LoginPad>
      </LoginArea>;
    }
  }
}
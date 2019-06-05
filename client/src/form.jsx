import React from "react";
import styled from 'styled-components';
import axios from "axios";

const LoginForm = styled.div`
`;

const LoginFormBox = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const InputWrap = styled.div`
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  margin: 0 40px 6px;
`;

const InputBox = styled.div`
  align-items: center;
  border-radius: 3px;
  box-sizing: border-box;
  color: #262626;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  position: relative;
  width: 100%;
  border: 1px solid #efefef;
`;

const InputInner = styled.div`
  height: 36px;
  flex: 1 0 0;
  padding: 0;
  position: relative;
  margin: 0;
  min-width: 0;
`;

const Input = styled.input`
  font-size: 16px;
  border: 0;
  flex: 1 0 0px;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: 9px 0 7px 8px;
  text-overflow: ellipsis;
  background: #fafafa;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

const Label = styled.label`
  color: #999;
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
  transform-origin: left;
  transition: transform ease-out .1s;
  user-select: none;
  white-space: nowrap;
`;

const ButtonWrap = styled.div`
  margin: 8px 40px 22px;
`;

const Button = styled.button`
  appearance: none;
  background: 0 0;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: 100%;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
  font-size: inherit;
`;

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      upass: '',
    };

    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
  }

  handleChangeId(event) {
    this.setState({ uid: event.target.value });
  }

  handleChangePass(event) {
    this.setState({ upass: event.target.value });
  }

  checkAuth(uid, upass) {
    const data = {
      id: uid,
      password: upass
    };
    axios
      .post('http://localhost:3000/api/login', data)
      .then((val) => {
        this.props.setUid(val.data.id);
      })
      .catch((error) => {
        //this.props.setUid()
      })
  }
  
  render() {
    return <LoginForm>
      <LoginFormBox>
        <InputWrap><InputBox><InputInner>
          <Label htmlFor="uid">電話番号、ユーザーネーム、メールアドレス</Label>
          <Input type="text" name="uid" id="uid"
            onChange = {(event) => {
                this.handleChangeId(event);
              }
            }
            value={this.state.uid}
          />
        </InputInner></InputBox></InputWrap>
        <InputWrap><InputBox><InputInner>
          <Label htmlFor="upass">パスワード</Label>
          <Input type="password" name="upass" id="upass"
            onChange = {(event) => {
                this.handleChangePass(event);
              }
            }
            value={this.state.upass}
          />
        </InputInner></InputBox></InputWrap>
        <ButtonWrap>
          <Button
            type = "submit"
            onClick = {
              () => {
                this.checkAuth(this.state.uid, this.state.upass);
              }
            }
          >
            ログイン
          </Button></ButtonWrap>
      </LoginFormBox>
    </LoginForm>
  }
}
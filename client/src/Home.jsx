import React from "react";
import Form from "./form"

export default class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if ( localStorage.getItem('uid') ) {
      return <div>ログインしました</div>
    }
  };

  render () {
    return <div className="loginArea">
      <div className="loginPad">
        <h1 className={'iconLogo '+'icon'}></h1>
        <Form/>
      </div>
      <div className="regist">
        アカウントをお持ちでないですか？ <a href="#">登録する</a>
      </div>
    </div>;
  }
}
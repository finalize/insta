import React from "react";

export default class Form extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return <div>
      <div><input type="text"/></div>
      <div><input type="password"/></div>
      <div><button type="submit">ログイン</button></div>
    </div>
  }
}
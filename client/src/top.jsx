import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

export default class Top extends React.Component {

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
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}
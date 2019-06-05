import React from "react";
import styled from "styled-components";
import Upload from "./upload";

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
  width: auto;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
  font-size: inherit;
`;

export default class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
    }
  }

  renderModal () {
    return <Upload/>
  }

  render() {
    return <ButtonWrap>
      {this.state.isDisplay && this.renderModal()}
      <Button
        onClick = {
          () => {
            this.setState({isDisplay: !this.state.isDisplay})
          }
        }
      >
        新規投稿する
      </Button>
    </ButtonWrap>
  }
}
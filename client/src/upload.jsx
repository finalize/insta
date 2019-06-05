import React from "react";
import styled from "styled-components";

const UploadModal = styled.div`
  margin: 8px 40px 22px;
  background: #fff;
  height: 200px;
  width: 300px;
`;

export default class Upload extends React.Component {
  render() {
    return <UploadModal></UploadModal>
  }
}
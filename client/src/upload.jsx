import React from "react";
import styled from "styled-components";

const UploadModal = styled.div`
  background: #000;
  width: 300px;
  height: 200px;  
`;

export default class Upload extends React.Component {
  render() {
    return (
      <UploadModal>
        <form action="/images" method="post" encType="multipart/form-data">
          <input type="file" name="image" />
          <button type="submit" value="Upload">upload</button>
        </form>
      </UploadModal>
    )
  }
}
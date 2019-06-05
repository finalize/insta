import React from "react";
import styled from "styled-components";

const UploadModal = styled.div`
<<<<<<< HEAD
  background: #000;
  width: 300px;
  height: 200px;  
=======
  margin: 8px 40px 22px;
  background: #fff;
  height: 200px;
  width: 300px;
>>>>>>> client_bk
`;

export default class Upload extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <UploadModal>
        <form action="/images" method="post" encType="multipart/form-data">
          <input type="file" name="image" />
          <button type="submit" value="Upload">upload</button>
        </form>
      </UploadModal>
    )
=======
    return <UploadModal></UploadModal>
>>>>>>> client_bk
  }
}
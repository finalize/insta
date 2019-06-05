import React from "react";
import styled from "styled-components";
import axios from "axios";

const UploadModal = styled.div`
  margin: 8px 40px 22px;
  background: #fff;
  height: 200px;
  width: 300px;
`;

export default class Upload extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imagePath: undefined,
    }
  }

  sendUpload() {
    const params = new FormData();
    const fileSelectDom = this.refs.image;

    params.append('image', fileSelectDom.files[0]);

    axios
      .post("http://localhost:3000/photos/upload", params)
      .then(
        (val) => {
          this.setState({imagePath: val.data.file.path})
        }
      )
  }

  showImage() {
    return this.state.imagePath && <img src={this.state.imagePath}/>
  }

  render() {
    return (
      <UploadModal>
        <div>
          <input type="file" name="image" ref="image" />
          <button value="Upload"
            onClick = {
              () => {
                this.sendUpload();
              }
            }
          >upload</button>
        </div>
        {this.showImage()}
      </UploadModal>
    )
  }
}
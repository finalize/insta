import React from "react";
import styled from "styled-components";
import axios from "axios";

const UploadModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
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
          const rowPath = val.data.file.path;
          this.setState({imagePath: rowPath.replace('public/', '')})
        }
      )
  }

  renderImage() {
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
        {this.renderImage()}
      </UploadModal>
    )
  }
}
import React from "react";
import { Button, withStyles, Typography, Box } from "@material-ui/core";
import axios from "axios/index";
import { api_endpoint } from "settings";
import ControlButtons from "components/pages/kyc/common/ControlButtons";

const buttonHolder = {
  marginTop: 5,
  marginBottom: 5,
};

const buttonStyle = {
  width: 220,
};

const border = {
  backgroundColor: '#e9f2f2',
  margin: '30px -40px 30px -40px',
  minWidth: '100%',
  height: 1
}

const CssButton = withStyles({
  root: {
    background: "#FF9B0F",
    // borderRadius: 50,
    border: 0,
    color: "white",
    height: 36,
    padding: "0 20px",
    transition: "box-shadow 0.2s linear",
    margin: "5px 5px 5px 5px",
    "&:hover": {
      boxShadow: "0 0 2px 5px #FFECD2",
      background: "#FF9B0F",
    },
  },
  label: {
    textTransform: "none",
    fontSize: "0.99rem",
  },
})(Button);

export default class PUFileUpload extends React.Component {
  state = {
    pictureSelected: false,
    selectedFile: null,
    selectedFileImage: this.props.backgroundImage,
  };


  fileSelectHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      selectedFileImage: URL.createObjectURL(event.target.files[0]),
      pictureSelected: true,
    });
    event.target.value = null;
  };

  generateImageHolderStyle = () => {
    return {
      maxWidth: 500,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // background: "#E0E8EC",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    };
  };



  clearFile = () => {
    this.setState({
      selectedFile: null,
      selectedFileImage: this.props.backgroundImage,
      pictureSelected: false,
    });
  };

  fileUploadHandler = () => {
    const data = new FormData();
    data.append("token", sessionStorage.getItem("token"));
    data.append("key", sessionStorage.getItem("key"));
    data.append("user_id", this.props.userID);
    data.append("session_user_id", sessionStorage.getItem("user_id"));

    console.log("uploading file with name: " + this.state.selectedFile.name);

    data.append("file_name", this.state.selectedFile.name);
    // data.append("file_type", "jpg");
    data.append("doc_type", this.props.docType);

    data.append("file_body", this.state.selectedFile);

    axios
      .post(
        api_endpoint + "/upload_file",
        data
        //,{}
      )
      .then((resp) => {
        sessionStorage.setItem("token", resp.data.response.token);
        sessionStorage.setItem("key", resp.data.response.key);
        this.props.successUploadHandler(resp.data, this.props.docType);
        // console.log(res.statusText)
      });
  };

  render() {
    //let image = this.state.selectedFileImage ? this.state.selectedFileImage : this.props.backgroundImage;

    return (
      <div>
        <Typography align="left" variant="subtitle2"> {this.props.label}</Typography>
        <br />
        <div className="file-upload" style={{display: 'none'}}>
          <input
            accept="image/*"
            className="file-upload"
            id="contained-button-file"
            multiple
            type="file"
            onChange={this.fileSelectHandler}
          />
        </div>
        <Box display="flex" alignItems="center" >
          <div
            // style={this.generateImageHolderStyle(this.state.selectedFileImage)}
          >
            <img
              alt=""
              src={this.state.selectedFileImage}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div style={{}}>
            <label htmlFor="contained-button-file">
              <div style={buttonHolder}>
                <CssButton
                  variant="contained"
                  color="primary"
                  component="span"
                  style={buttonStyle}
                >
                  Upload
                </CssButton>
              </div>
            </label>
            <div style={buttonHolder}>
              <CssButton
                variant="contained"
                color="primary"
                component="span"
                style={buttonStyle}
                disabled={!this.state.pictureSelected}
                onClick={this.clearFile}
              >
                Clear
              </CssButton>
            </div>
          </div>
        </Box>
        <div style={border}/>
        <ControlButtons
          nextDisabled={!this.state.pictureSelected}
          onNext={this.fileUploadHandler}
          onPrev={this.props.onPrevClick}
        />
        {/* <CssButton
              variant="contained"
              color="primary"
              component="span"
              style={buttonStyle}
              disabled={!this.state.pictureSelected}
              onClick={this.fileUploadHandler}
            >
              {this.props.upload_file_label}
            </CssButton> */}
      </div>
    );
  }
}

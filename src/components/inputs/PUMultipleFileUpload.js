import React from "react";
import { Button, IconButton, withStyles, Paper, Box } from "@material-ui/core";
import axios from "axios/index";
import DelIcon from "@material-ui/icons/Close";

import PDFImage from "../images/pdf_image.png";
import { api_endpoint } from "../../settings";

const styles = {
  fileUploadListItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#fbfdfd",
    cursor: "pointer",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    padding: "15px 20px",
    border: "1px solid #ecf3f3",
    marginBottom: 10,
  },
  fileUploadListItemSelected: {
    borderColor: "#FF9B0F",
  },
  btnRemoveUploadItem: {
    background: "#FF9B0F",
    "&:hover": {
      background: "#FF9B0F",
    },
  },
  paperImage: {
    width: 450,
    height: 450,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
  },
};


const buttonStyle = {
  width: 220,
};

const CssButton = withStyles({
  root: {
    background: "#FF9B0F",
    borderRadius: 50,
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

const delButtonHolder = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

class PUMultipleFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.fileSelectHandler = this.fileSelectHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.clearFile = this.clearFile.bind(this);
    this.viewItem = this.viewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      pictureSelected: false,
      selectedFile: null,
      files: [],
      seq_id: 0,
      maxFileCount: this.props.maxFileCount,
      uploadText: "Select document",
    };
  }

  removeItem(itemID) {
    let files_ = this.state.files;
    for (const file of files_) {
      if (file.file_id === itemID) {
        const index = files_.indexOf(file);
        if (index > -1) {
          files_.splice(index, 1);
          this.setState({ files: files_, selectedFileImage: null });
        }
      }
    }
    console.log(this.state.items);
  }

  fileSelectHandler(event) {
    let new_id = this.state.seq_id + 1;
    let newFile = {
      selectedFile: event.target.files[0],
      selectedFileImage: URL.createObjectURL(event.target.files[0]),
      file_id: new_id,
      selected: false,
    };
    let fileList = this.state.files;
    for (const file of fileList) {
      file.selected = false;
    }
    fileList.push(newFile);

    this.setState({
      files: fileList,
      uploadText:
        fileList.length >= this.props.maxFileCount
          ? "Max " + this.props.maxFileCount + " files allowed"
          : "Add more documents",
      seq_id: new_id,
    });
    event.target.value = null;
    if (newFile.selectedFile.type === "application/pdf") {
      this.setState({ selectedFileImage: PDFImage });
    } else {
      this.setState({ selectedFileImage: newFile.selectedFileImage });
    }

    //console.log("file type = " + newFile.selectedFile.type);
  }

  viewItem(selected_file_id) {
    //console.log("selected file id = " + selected_file_id);
    let files = this.state.files;
    let idx = 0;
    for (const file of files) {
      if (file.file_id === selected_file_id) {
        //console.log("found");
        if (file.selectedFile.type === "application/pdf") {
          this.setState({ selectedFileImage: PDFImage });
        } else {
          this.setState({ selectedFileImage: file.selectedFileImage });
        }
        files[idx].selected = true;
      } else {
        files[idx].selected = false;
      }
      idx = idx + 1;
    }
  }

  generateImageHolderStyle = () => {
    return {
      width: 450,
      height: 450,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff",
    };
  };

  clearFile() {
    this.setState({
      selectedFile: null,
      selectedFileImage: null,
      pictureSelected: false,
    });
  }

  async fileUploadHandler() {
    for (let i = 0; i < this.state.files.length; i++) {
      const data = new FormData();
      console.log(
        "uploading file with name: " + this.state.files[i].selectedFile.name
      );

      data.append("token", sessionStorage.getItem("token"));
      data.append("key", sessionStorage.getItem("key"));
      data.append("user_id", sessionStorage.getItem("user_id"));
      data.append("session_user_id", sessionStorage.getItem("user_id"));
      data.append("file_name", this.state.files[i].selectedFile.name);
      data.append("doc_type", this.props.docType);
      data.append("file_body", this.state.files[i].selectedFile);
      const resp = await axios.post(api_endpoint + "/upload_file", data);
      console.log("data ==== " + JSON.stringify(resp.data));

      if (resp.data.status === "OK") {
        sessionStorage.setItem("token", resp.data.response.token);
        sessionStorage.setItem("key", resp.data.response.key);
      } else {
        this.props.successUploadHandler();
        alert("problems loading files");
        break;
      }
    }
    alert("successfully loaded, uploaded pictures are now in state PENDING");

    const docGroupData = {
      user_id: sessionStorage.getItem("user_id"),
      doc_group_code: this.props.docType,
      new_status_code: "PENDING",
      token: sessionStorage.getItem("token"),
      key: sessionStorage.getItem("key"),
    };

    const resp = await axios.post(
      api_endpoint + "/set_kyc_documents_status",
      docGroupData
    );
    if (resp.data.status === "OK") {
      let token = resp.data.response.token;
      let key = resp.data.response.key;
      let checkStatusData = {
        user_id: sessionStorage.getItem("user_id"),
        kyc_stage: "BUSINESS_KYC_SUPPORTING_DOCUMENTATION",
        token: token,
        key: key,
      };
      axios
        .post(api_endpoint + "/update_kyc_stage_status", checkStatusData)
        .then((resp) => {
          if (resp.data.status === "OK") {
            sessionStorage.setItem("token", resp.data.response.token);
            sessionStorage.setItem("key", resp.data.response.key);
            this.props.successUploadHandler();
          }
        });
    } else {
      alert("something went terribly wrong!");
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Box display="flex">
          <Box mr={4}>
            <label htmlFor="contained-button-file">
              <CssButton
                variant="contained"
                color="primary"
                component="span"
                style={buttonStyle}
                disabled={this.state.files.length >= this.props.maxFileCount}
              >
                {this.state.uploadText}
              </CssButton>
            </label>
          </Box>
          <CssButton
            variant="contained"
            color="primary"
            component="span"
            style={buttonStyle}
            disabled={this.state.files.length === 0}
            onClick={this.fileUploadHandler}
          >
            {this.props.upload_file_label}
          </CssButton>
        </Box>
        <br />
        <br />

        <div
          style={{
            display: "flex",
            direction: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ height: 400, minWidth: 320 }}>
            {this.state.files.map((result) => (
              <div
                className={`${classes.fileUploadListItem} ${
                  result.selected ? classes.fileUploadListItemSelected : ""
                }`}
                onClick={() => this.viewItem(result.file_id)}
              >
                <div style={{ width: 240 }} id={"file-" + result.file_id}>
                  {result.selectedFile.name}
                </div>
                <div style={delButtonHolder}>
                  <IconButton
                    size="small"
                    className={classes.btnRemoveUploadItem}
                    onClick={() => this.removeItem(result.file_id)}
                  >
                    <DelIcon
                      fontSize="small"
                      style={{ color: result.id === 1 ? "#fff" : "#fff" }}
                    />
                  </IconButton>
                </div>
              </div>
            ))}
            <div>
              <div className="file-upload">
                <input
                  accept="image/*"
                  className="file-upload"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={this.fileSelectHandler}
                  disabled={this.state.files.length >= this.props.maxFileCount}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginLeft: 20, width: "100%" }}>
            <Paper elevation={3}>
              <div className={classes.paperImage}>
                <img
                  alt=""
                  src={this.state.selectedFileImage}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PUMultipleFileUpload);

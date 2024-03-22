import React, {useState, useEffect} from "react"
import "../css/data.css"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ReorderIcon from "@material-ui/icons/Reorder";
import InfoIcon from "@material-ui/icons/Info";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CheckIcon from "@material-ui/icons/Check";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { db } from "../firebase";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GridOnIcon from "@material-ui/icons/GridOn";

function Data() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myfiles").onSnapshot(snapshot => {
      setFiles(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  const changeBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <div className="data">
      <div className="data__header">
        <div className="data__headerLeft">
          <p>Home</p>
        </div>
        <div className="data__headerRight">
          <div className="container">
            <button className="check-button"> <CheckIcon style={{ marginRight: "1px" }} /> <ReorderIcon style={{ marginLeft: "1px" }} /> </button>
            <button className="grid-button"> <span>  <GridOnIcon/> </span> </button>
          </div>
          <span >
            <InfoIcon style={{ marginTop: "5px"}} />
          </span>
        </div>
      </div>
      <div className="suggested">
        <p>Suggested</p>
        <div className="button-container">
          <button className="file-button"> <CheckIcon/> <b>File</b></button>
          <button className="folder-button"> <FolderOpenIcon/> <b>Folder</b></button>
        </div>
        <div className="vertical-line"></div>
        <div className="right_buttons">
          <button className="type-button">Type <ArrowDropDownIcon/> </button>
          <button className="people-button">People <ArrowDropDownIcon/> </button>
          <button className="modified-button">Modified <ArrowDropDownIcon/> </button>
          <button className="location-button">Location <ArrowDropDownIcon/> </button>
        </div>
      </div>        
      <div className="data__content">
        {/* <div className="data_grid">
          {
            files.map((file)=>{
              return <div className="data__file">
              <InsertDriveFileIcon/>
              <p>{file.data.filename}</p>
            </div>
            })
          }
        </div> */}

        <div className="data_list">
          <div className="detailsRow">
            <p><b>Name</b></p>
            <p className="reason"><b>Reason suggested</b></p>
            <p className="owner"><b>Owner</b></p>
            <p className="location"><b>Location</b></p>
            <p className="file-size"><b>File Size</b></p>
          </div>

          {files.map((file) => (
            <div className="detailsRow" key={file.data.filename}>
              <p> 
                <a href={file.data.fileURL} target="_blank" rel="noreferrer"> 
                  <InsertDriveFileIcon/> {file.data.filename.length > 20 ? file.data.filename.substring(0, 20) + "..." : file.data.filename}
                </a> 
              </p>
              <p>{new Date(file.data.timestamp?.seconds*1000).toUTCString()}</p>
              <p> <AccountCircleIcon /> Me </p>
              <p className="drive">My Drive</p>
              <p>{changeBytes(file.data.size)}</p>
              <p className="moreVertIcon"> <MoreVertIcon/> </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="show-more-files-button"><b>Show more files</b></button>
      </div>
    </div>
  )
}

export default Data;

import { Cancel, School } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";

    
export const NewFileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([]);
    
    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('http://localhost:8800/api/upload/uploadFile', data)
            .then((response) => {
                console.log('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                console.log('Upload Error')
            })
    }

    return (
        <div className="UploadbuttonContainer">
          <div className="Button" onClick={this.onSubmit}>
            <input type="file" name="file" className="form-control" onChange={this.onInputChange}/>
          <button width="100%" type="button" className="btn btn-info" onClick={this.onSubmit}>Upload File</button>
        </div>
      </div>
      );
    };

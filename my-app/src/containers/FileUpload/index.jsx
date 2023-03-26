import { Cancel, School } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "./FileUpload.css";

    
export const FileUpload = ({onSuccess}) => {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);
  // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

  const processCSV = (str, delim=',') => {
      const headers = str.slice(0,str.indexOf('\n')).split(delim);
      const rows = str.slice(str.indexOf('\n')+1).split('\n');

      const newArray = rows.map( row => {
          const values = row.split(delim);
          const eachObject = headers.reduce((obj, header, i) => {
              obj[header] = values[i];
              return obj;
          }, {})
          return eachObject;
      })
      console.log(axios.post("http://localhost:8800/api/upload/uploadFile", {'data':newArray}, {}))

      setCsvArray(newArray)
  }

  const submit = () => {
      const file = csvFile;
      const reader = new FileReader();

      reader.onload = function(e) {
          const text = e.target.result;
          console.log(text);
          processCSV(text)
      }

      reader.readAsText(file);
  }

  return(
      <form id='csv-form'>
          <input
              type='file'
              accept='.csv'
              id='csvFile'
              onChange={(e) => {
                  setCsvFile(e.target.files[0])
              }}
          >
          </input>
          <br/>
          <button
              onClick={(e) => {
                  e.preventDefault()
                  if(csvFile)submit()
              }}
          >
              Submit
          </button>
          <br/>
          <br/>
          {csvArray.length>0 ? 
          <>
              <table>
                  <thead>
                      <th>STATION</th>
                      <th>STATION_NAME</th>
                      <th>ELEVATION</th>
                  </thead>
                  <tbody>
                      {
                          csvArray.map((item, i) => (
                              <tr key={i}>
                                  <td>{item.STATION}</td>
                                  <td>{item.STATION_NAME}</td>
                                  <td>{item.ELEVATION}</td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
          </> : null}
      </form>
  );

}

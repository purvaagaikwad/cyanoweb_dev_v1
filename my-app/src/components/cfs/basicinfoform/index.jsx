import axios from "axios";
import { useRef, useState } from "react";
import "./basicinfoform.css";
import Select from "react-select";
import 'bootstrap/dist/css/bootstrap.min.css';



export function BasicInfo() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const locationRef = useRef();
  const  dateRef= useRef();
  const deviceRef = useRef();
  const  modelRef = useRef();

  const options=[

    {label:"Lake Erie",

    value:"- 41.7019444, -83.261389"},

    {label:"Grand Lake St. Mary",

    value:"- 40.5419444, -84.573333",

    }

  ]

  const [result,setResult]=useState(options.value)



  const resuHandler = e=>{

    setResult(e.value)

  }
  const[date,setDate]=useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDataentry = {
      
      location: locationRef.current.value,
      date: dateRef.current.value,  
      model: modelRef.current.value,
      device: deviceRef.current.value,

    };

    try {
      await axios.post("http://localhost:8800/api/dataupload/dataupload", newDataentry);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };
  return (
    
    

    
    <div className="formContainerbasicinfo">
    <span>Basic Information</span>

      <form onSubmit={handleSubmit}>

<div class="row">
     <div class="col">
        
        <div class="input"> <Select class="selectstyle" options={options}  onChange={resuHandler} placeholder="Water Source" ref={locationRef} /></div>
         
     </div>
     <div class="col">
      
         <input type="date" onChange={(e=>setDate(e.target.value))} autoFocus placeholder="Date (mm/dd/yyyy)" ref={dateRef} />  
     </div>     
     <div class="col">
        <input autoFocus placeholder="Model" ref={modelRef} />
     </div>
     <div class="col">
        <input autoFocus placeholder="Device" ref={deviceRef} />
     </div>     
</div>
{/* <div class ="row">
    <div class="col">
        <button class="cfsbutton">
          Coagulation
        </button>
    </div>    
    <div class="col">
        <button class="cfsbutton">
          Coagulation + Floccultion
        </button>
    </div>
    <div class="col">
        <button class="cfsbutton">
          Coagulation + Flocculation + Sedimenation
        </button>
    </div>
</div>         */}
      </form>

    </div>
  );
}

import axios from "axios";
import { useRef, useState } from "react";
import "./dataform.css";
import { Cancel, School } from "@material-ui/icons";
import Select from 'react-select'
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useDeprecatedAnimatedState } from "framer-motion";
export default function Upload({ setShowRegister,props }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [riverState,setRiverState]=useState("")
  const[Erie]=useState('- 41.7019444, -83.261389')
  const[Mary]=useState('- 40.5419444, -84.573333')
  const locationRef = useRef();
  const  dateRef= useRef();
  const temperatureRef = useRef();
  const  phRef = useRef();
  // const zetapotentialRef = useRef();
  const turbidityRef = useRef();
  const dissolvedoxygenRef = useRef();
  // const totaldissolvedsolidsRef = useRef();
  // const electricalconductivityRef = useRef();
  const totalmicrocytisrawRef =useRef();
  const mcyemicrocytisrawRef =useRef();
  const mcyeplanktothrixrawRef =useRef();
  const totalmicrocystinsrawRef =useRef();
  const[date,setDate]=useState()
  const[selects,setSelects]=useState()
const options=[
    {label:"Lake Erie", 
    value:" 41.7019444, -83.261389"},
    {label:"Lake St. Mary",
    value:" 40.5419444, -84.573333",
    },
    {label:"Ohio River",
    value:"39.07379, -84.42019",
    }
  ]
  const [result,setResult]=useState(options.value)

  const resuHandler = e=>{
    setResult(e.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDataentry = {
      location: locationRef.current.value,
      date: dateRef.current.value,  
      temperature: temperatureRef.current.value,
      ph: phRef.current.value,
      turbidity: turbidityRef.current.value,      
      // zetapotential: zetapotentialRef.current.value,
      totalmicrocytis: totalmicrocytisrawRef.current.value,
      mcyemicrocytis: mcyemicrocytisrawRef.current.value,
      dissolvedoxygen: dissolvedoxygenRef.current.value,
      mcyeplanktothrix: mcyeplanktothrixrawRef.current.value,
      totalmicrocystins: totalmicrocystinsrawRef.current.value,
      // totaldissolvedsolids: totaldissolvedsolidsRef.current.value,
      // electricalconductivity: electricalconductivityRef.current.value,
    };

    try {
      await axios.post("/api/dataupload", newDataentry);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };
  return (
    
    

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    <div className="formContainer">
      <Form onSubmit={handleSubmit}>
      <Row xs={12}>
        <Col xs={5}>
        <span>Location:</span>
        </Col> 
        <Col xs= {4}>
        <Select  options={options}  onChange={resuHandler} placeholder="
        Select" ref={locationRef} />
        </Col>
       <input type="hidden" value={result} ref={locationRef}/></Row>
       <Row xs={12}>
        <Col xs ={5}>
          <span>Date:</span>
        </Col>
        <Col xs={4}>
        <input type="date" onChange={(e=>setDate(e.target.value))} autoFocus placeholder="Date (mm/dd/yyyy)" ref={dateRef} />
        </Col>
       </Row>
          <Row>
            <Col xs={5}>
            <span>Temperature:</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={temperatureRef} />
            </Col>
            <Col xs= {4}>
            (Degree C)
            </Col>
          </Row>
          

          <Row>
            <Col xs={5}>
            <span>pH:</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={phRef} />
            </Col>
            <Col xs= {4}>
            
            </Col>
          </Row>

          <Row>
            <Col xs={5}>
            <span>Turbidity:</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={turbidityRef} /> 
            </Col>
            <Col xs= {4}>
            (NTU)
            </Col>
          </Row>

          
          <Row>
            <Col xs={5}>
            <span>Dissolved Oxygen:</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={dissolvedoxygenRef} />
            </Col>
            <Col xs= {4}>
            (mg/L)
            </Col>
          </Row>
        
          <Row>
            <Col xs={5}>
            <span>Total Microcystis (PC-IGS):</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={totalmicrocytisrawRef} />
            </Col>
            <Col xs= {4}>
            (Log gene copies/L)
            </Col>
          </Row>
        

          <Row>
            <Col xs={5}>
            <span>mcyE Microcystis:</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={mcyemicrocytisrawRef} />
            </Col>
            <Col xs= {4}>
            (Log gene copies/L)
            </Col>
          </Row>
        

          <Row>
            <Col xs={5}>
            <span>mcyE Planktothrix:</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={mcyeplanktothrixrawRef} />
            </Col>
            <Col xs= {4}>
            (Log gene copies/L)
            </Col>
          </Row>
        

          <Row>
            <Col xs={5}>
            <span>Total microcystins:</span>
            </Col>
            <Col xs={3}>
            <input autoFocus placeholder="" ref={totalmicrocystinsrawRef} />
            </Col>
            <Col xs= {4}>
            (ppb)
            </Col>
          </Row>
        
        
              
        {/* <input autoFocus placeholder="Zeta Potential (mV)" ref={zetapotentialRef} /> */}
        
        {/* <input autoFocus placeholder="Total Dissolved Solids (mg/L)" ref={totaldissolvedsolidsRef} /> */}
        {/* <input autoFocus placeholder="Electrical Conductivity (µS/cm)" ref={electricalconductivityRef} /> */}
        
        
       
        

        <button className="submitBtn" type="submit">
          Submit
        </button>
        {success && (
          <span className="success">Success</span>
        )}
        {error && <span className="failure">failed!</span>}
      </Form>
      <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}
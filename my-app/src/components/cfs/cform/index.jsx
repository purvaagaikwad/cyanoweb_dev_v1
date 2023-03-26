import axios from "axios";
import { useRef, useState } from "react";
import "./cform.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormControl } from "@material-ui/core";
import { ErrorSharp } from "@material-ui/icons";

export default function CForm() {
  const locationRef = useRef();
  const dateRef = useRef();
  const deviceRef = useRef();
  const modelRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setErrors] = useState(false);
  const watertempRef = useRef();
  const waterphRef = useRef();
  const supplierRef = useRef();
  const chemicaldosageRef = useRef();
  const reactiontimeRef = useRef();
  const chemicalRef = useRef();
  const otherchemicalRef = useRef();
  const timeunitRef = useRef();
  const chemicalspeedRef = useRef();
  const initialturbidityRef = useRef();
  const finalturbidityRef = useRef();
  const turbidityremovalRef = useRef();
  const totalmicrocystisinitialRef = useRef();
  const totalmicrocystisfinalRef = useRef();
  const totalmicrocystisremovalRef = useRef();
  const mcyemicrocystisinitialRef = useRef();
  const mcyemicrocystisfinalRef = useRef();
  const mcyemicrocystisremovalRef = useRef();
  const mcyeplanktothrixinitialRef = useRef();
  const mcyeplanktothrixfinalRef = useRef();
  const mcyeplanktothrixremovalRef = useRef();
  const totalmicrocystinsinitialRef = useRef();
  const totalmicrocystinsfinalRef = useRef();
  const totalmicrocystinsremovalRef = useRef();

  const [formValue, setFormValue] = useState(null);
  const [formValue1, setFormValue1] = useState(null);
  const [formValue2, setFormValue2] = useState(null);
  const [validated, setValidated] = useState(false);
  const [turbidityInitial, setTurbidityInitial] = useState("");
  const [turbidityFinal, setTurbidityFinal] = useState("");
  const [turbidityRemoval, setTurbidityRemoval] = useState("");
  const [totalmicrocystisInitial, settotalmicrocystisInitial] = useState("");
  const [totalmicrocystisFinal, settotalmicrocystisFinal] = useState("");
  const [totalmicrocystisRemoval, settotalmicrocystisRemoval] = useState("");
  const [mcyemicrocystisInitial, setmcyemicrocystisInitial] = useState("");
  const [mcyemicrocystisFinal, setmcyemicrocystisFinal] = useState("");
  const [mcyemicrocystisRemoval, setmcyemicrocystisRemoval] = useState("");
  const [mcyeplanktothrixInitial, setmcyeplanktothrixInitial] = useState("");
  const [mcyeplanktothrixFinal, setmcyeplanktothrixFinal] = useState("");
  const [mcyeplanktothrixRemoval, setmcyeplanktothrixRemoval] = useState("");
  const [totalmicrocystinsInitial, settotalmicrocystinsInitial] = useState("");
  const [totalmicrocystinsFinal, settotalmicrocystinsFinal] = useState("");
  const [totalmicrocystinsRemoval, settotalmicrocystinsRemoval] = useState("");

  // const handleSubmit = (event) => {
  //   console.log("Success1");

  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

    console.log("Success");
    // debugger;

  //   const findFormErrors = () => {
  //     const {watertemp, waterph } = Form
  //     const newErrors = {}
  //     // name errors
  //     if ( !watertemp || watertemp > 30 || watertemp < 0) newErrors.watertemp = 'Water Temp Must be between 0 and 30 Degree C!'
  
  //     if ( !waterph || waterph > 14 || waterph < 1 ) newErrors.waterph = 'Water pH must be a value between 1 and 14!'
      
  
  //     return newErrors
  // }
    const handleSubmit = async (e) => {
      
        e.preventDefault();
        // const newErrors = findFormErrors()
        // if (Object.keys(newErrors).length > 0){
        //   setErrors(newErrors)
        // }
        
        // else{

        
      
    const newDataentry = {
      location: locationRef.current.value,
      date: dateRef.current.value,
      device: deviceRef.current.value,
      model: modelRef.current.value,
      watertemp: watertempRef.current.value,
      waterph: waterphRef.current.value,
      supplier: supplierRef.current.value,
      chemicaldosage: chemicaldosageRef.current.value,
      reactiontime: reactiontimeRef.current.value,
      chemical: chemicalRef.current.value,
      otherchemical: otherchemicalRef.current.value,
      timeunit: timeunitRef.current.value,
      chemicalspeed: chemicalspeedRef.current.value,
      initialturbidity: initialturbidityRef.current.value,
      finalturbidity: finalturbidityRef.current.value,
      turbidityremoval: turbidityremovalRef.current.value,
      totalmicrocystisinitial: totalmicrocystisinitialRef.current.value ,
      totalmicrocystisfinal: totalmicrocystisfinalRef.current.value  ,
      totalmicrocystisremoval: totalmicrocystisremovalRef.current.value ,
      mcyemicrocystisinitial: mcyemicrocystisinitialRef.current.value  ,
      mcyemicrocystisfinal: mcyemicrocystisfinalRef.current.value ,
      mcyemicrocystisremoval: mcyemicrocystisremovalRef.current.value ,
      mcyeplanktothrixinitial: mcyeplanktothrixinitialRef.current.value  ,
      mcyeplanktothrixfinal: mcyeplanktothrixfinalRef.current.value  ,
      mcyeplanktothrixremoval: mcyeplanktothrixremovalRef.current.value ,
      totalmicrocystinsinitial: totalmicrocystinsinitialRef.current.value  ,
      totalmicrocystinsfinal: totalmicrocystinsfinalRef.current.value ,
      totalmicrocystinsremoval: totalmicrocystinsremovalRef.current.value ,
    };

    try {
      await axios.post("/api/cformupload",
        newDataentry
      );
      setErrors(false);
      setSuccess(true);
    } catch (err) {
      setErrors(true);
   };
    console.log(newDataentry)

     setValidated(true);
  };
    


  const locationoptions=[
    {label:"Lake Erie", 
    value:"- 41.7019444, -83.261389"},
    {label:"Lake St. Mary",
    value:"- 40.5419444, -84.573333",
    },
    {label:"Ohio River",
    value:"Ohio River",
    }
  ]
  const [result2, setResult2] = useState(locationoptions.value);
  const chemicaloptions=[
    {label:"Aluminum Sulfate", 
    value:"Aluminum Sulfate"},
    {label:"Ferric Chloride",
    value:"Ferric Chloride",
    },
    {label:"Polyaluminum Chloride", 
    value:"Polyaluminum Chloride"},
    {label:"Other (Specify Below)", 
    value:"Other (Specify Below)"}
  ]

  const [result1, setResult1] = useState(chemicaloptions.value);


  const timeunitoptions = [
    { label: "Min", value: "Min" },
    { label: "Sec", value: "Sec" },
  ];

  const [result, setResult] = useState(timeunitoptions.value);

  const resuHandler = (e) => {
    setResult(e.value); };

 const resuHandler1 = (e) => { 
    setResult1(e.value); };

 const resuHandler2 = (e) => { 
    setResult2(e.value);};

  const [date, setDate] = useState();

  function calculateValue(initialValue, finalValue) {
    console.log(initialValue, finalValue);
    if (initialValue && finalValue)
      return ((initialValue - finalValue) / initialValue) * 100;
    else return "";
  }

  // const setField = (field, value) => {
  //   setForm({
  //     ...Form,
  //     [field]: value
  //   })
  //   // Check and see if errors exist, and remove them from the error object:
  //   if ( !!error[field] ) setErrors({
  //     ...error,
  //     [field]: null
  //   })
  // }
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="formContainerbasicinfo">
        <span>Basic Information</span>

        <Form.Group as={Row} controlId="basicinfo">
          <Col>
            <Col xs={2}>
              <Form.Label>Source:</Form.Label>
            </Col>
            <Col xs={8}>
            
            <Select type="required" options={locationoptions}  onChange={resuHandler2} placeholder="Select" ref={locationRef} />
            <input type="hidden" value={result2} ref={locationRef}/>
            
              {/* <Form.Control
                ref={locationRef}
                required
                name="source"
                as="select"
                type="select"
                onChange={(e) => {
                  setFormValue2(e.target.value);
                }}
                value={formValue2}
              >
                {/* {cchemicaloptions.map((e) => (
              <option value={e.value}>{e.label}</option>
            ))} */}
                {/* <option value="">Select</option>
                <option value="Lake Erie">Lake Erie</option>
                <option value="Grand lake St Mary's">
                  Grand lake St Mary's
                </option>
                <option value="Ohio River">Ohio River</option> */}
              {/* </Form.Control> */} 
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label> Date:</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control required type="date" ref={dateRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label>Model</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" ref={modelRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label>Device</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" ref={deviceRef} />
            </Col>
          </Col>
        </Form.Group>
      </div>
      {/* <div className="buttonsContainer">
        <Row>
          <Col>
            <Button style={{backgroundColor:"darkgreen"}} className="cfsbutton">Coagulation
            </Button>
          </Col>
          <Col>
            <Button style={{backgroundColor:"darkgreen"}} className="cfsbutton">Coagulation + Flocculation</Button>
          </Col>
          <Col>
            <Button style={{backgroundColor:"darkgreen"}} className="cfsbutton">
              Coagulation + Flocculation + Sedimentation
            </Button>
          </Col>
        </Row>
      </div> */}

      <div className="largerContainer">
        <span>User Input: Coagulation</span>

        <div className="formoneContainer">
          <span>Experimental Conditions</span>
          <Form.Group as={Col} controlId="formWaterTemp" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Water Temperature (0-30)</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text"  ref={watertempRef} />
              </Col>
              <Col xs={2}>
                <Form.Label>(°C) </Form.Label>
              </Col>
            </Row>
            {/* <Form.Label style={{ marginLeft: "0px" }}>
              Water Temperature (0-30)
            </Form.Label>
            <div
              style={{ display: "inline-flex", width: "8vw", margin: "5px" }}
            >
              <Form.Control required type="text" ref={watertempRef} />
            </div>
            <Form.Label>(°C) </Form.Label> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formWaterph" xs={12}>
            <Row>
              <Col xs={6} style={{ textAlign: "left" }}>
                <Form.Label> Water pH(0-14)</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text"  ref={waterphRef} />
              </Col>
              <Col xs={2}>
                <Form.Label></Form.Label>
              </Col>
            </Row>
            {/* <Form.Label style={{ marginLeft: "0px" }}>
              Water pH(0-14)
            </Form.Label>
            <div
              style={{ display: "inline-flex", width: "8vw", margin: "5px" }}
            >
              <Form.Control required type="text" ref={waterphRef} />
            </div>
            <Form.Label> </Form.Label> */}
          </Form.Group>

          <Form.Group as={Col} controlId="chem" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Chemical Type</Form.Label>
              </Col>
              <Col xs={4}>
              <Select  options={chemicaloptions}  onChange={resuHandler1} placeholder="Select" ref={chemicalRef} />
              <input type="hidden" value={result1} ref={chemicalRef}/>
                {/* <Form.Control
                  ref={chemicalRef}
                  required
                  name="chem"
                  as="select"
                  type="select"
                  onChange={(e) => {
                    setFormValue(e.target.value);
                  }}
                  value={formValue}
                >
                  {/* {cchemicaloptions.map((e) => (
              <option value={e.value}>{e.label}</option>
            ))} */}
                  {/* <option value="">Select</option>
                  <option value="Aluminum_Sulfate">Aluminum Sulfate</option>
                  <option value="Ferric_Chloride">Ferric Chloride</option>
                  <option value="Polyaluminum_Chloride">
                    Polyaluminum Chloride
                  </option>
                  <option value="Other">Other (Specify Below)</option>
                </Form.Control> */}
              </Col>
              <Col xs={0}>
                <Form.Label></Form.Label>
              </Col>
            </Row>
            {/* <Form.Label>Chemical Type</Form.Label> */}
            {/* <Form.Control
              required
              name="chem"
              as="select"
              type="select"
              style={{ display: "inline-flex", width: "10vw", margin: "5px" }}
              onChange={(e) => {
                setFormValue(e.target.value);
              }}
              value={formValue}
            >
              {/* {cchemicaloptions.map((e) => (
              <option value={e.value}>{e.label}</option>
            ))} */}
            {/* <option value="">Select</option>
              <option value="Aluminum_Sulfate">Aluminum Sulfate</option>
              <option value="Ferric_Chloride">Ferric Chloride</option>
              <option value="Polyaluminum_Chloride">
                Polyaluminum Chloride
              </option>
              // <option value="Other">Other</option> */}
            {/* </Form.Control> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formOther" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Other Chemical Type</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control type="text" ref={otherchemicalRef} />
              </Col>
              <Col xs={2}>
                <Form.Label> </Form.Label>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="formSupp" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Manufacturer/Supplier</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={supplierRef} />
              </Col>
              <Col xs={2}>
                <Form.Label> </Form.Label>
              </Col>
            </Row>
            {/* <Form.Label>Manufacturer/Supplier </Form.Label>
            <div
              style={{ display: "inline-flex", width: "8vw", margin: "5px" }}
            >
              <Form.Control required type="text" ref={supplierRef} />
            </div>
            <Form.Label> </Form.Label> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formChem" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Chemical Dosage</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={chemicaldosageRef} />
              </Col>
              <Col xs={2}>
                <Form.Label> mg/L </Form.Label>
              </Col>
            </Row>

            {/* <Form.Label>Chemical Dosage</Form.Label>
            <div
              style={{ display: "inline-flex", width: "8vw", margin: "5px" }}
            >
              <Form.Control required type="text" ref={chemicaldosageRef} />
            </div>
            <Form.Label>mg/L </Form.Label> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formWaterTemp" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Chemical Speed</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={chemicalspeedRef} />
              </Col>
              <Col xs={2}>
                <Form.Label> rpm </Form.Label>
              </Col>
            </Row>
            {/* <Form.Label>Chemical Speed</Form.Label>
            <div
              style={{ display: "inline-flex", width: "8vw", margin: "5px" }}
            >
              <Form.Control required type="text" ref={chemicalspeedRef} />
            </div>
            <Form.Label>rpm </Form.Label> */}
          </Form.Group>

          <Form.Group as={Col}  xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Reaction Time</Form.Label>
              </Col>
              <Col xs={3}>
                <Form.Control required type="text" ref={reactiontimeRef} />
              </Col>
              <Col xs={3}>
                <Form.Label>
            <Select  options={timeunitoptions}  onChange={resuHandler} placeholder="M/S" ref={timeunitRef} />
            <input type="hidden" value={result} ref={timeunitRef}/>
                  {/* <Form.Control
                    ref={timeunitRef}
                    required
                    name="timeunit"
                    as="select"
                    type="select"
                    onChange={(e) => {
                      setFormValue1(e.target.value);
                    }}
                    value={formValue1}
                  >
                    <option value="">Select</option>
                    <option value="Sec">Sec</option>
                    <option value="Min">Min</option>
                  </Form.Control> */}
                </Form.Label>
              </Col>
            </Row>
            {/* <Form.Label>Reaction Time</Form.Label>
            <div
              style={{ display: "inline-flex", width: "8vw", margin: "5px" }}
            >
              <Form.Control required type="text" ref={reactiontimeRef} />
            </div>
            <Form.Label>
              <Form.Control
                required
                name="timeunit"
                as="select"
                type="select"
                onChange={(e) => {
                  setFormValue1(e.target.value);
                }}
                value={formValue1}
              >
                <option value="">Select</option>
                <option value="Sec">Sec</option>
                <option value="Min">Min</option>
              </Form.Control>
            </Form.Label> */}
          </Form.Group>

          {/* <div class="row">
            <input
              autoFocus
              placeholder="Water Temperature (0°C-30°C)"
              ref={watertempRef}
            />
          </div>
          <div class="row">
            <input autoFocus placeholder="Water pH" ref={waterphRef} />
          </div>
          <div class="row">
            <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,

                colors: {
                  ...theme.colors,
                  primary25: "green",
                  primary: "black",
                },
              })}
              options={cchemicaloptions}
              onChange={resuHandler}
              placeholder="Chemical type"
              ref={chemicalRef}
            />
          </div>
          <div class="row">
            <input
              autoFocus
              placeholder="Manufacturer/Supplier"
              ref={supplierRef}
            />
          </div>
          <div class="row">
            <input
              autoFocus
              placeholder="Chemical Dosage (mg/L)"
              ref={chemicaldosageRef}
            />
          </div>
          <div class="row">
            <input
              autoFocus
              placeholder="Chemical Speed(rpm)"
              ref={chemicalspeedRef}
            />
          </div>
          <div class="row">
            <input
              autoFocus
              placeholder="Reaction Time"
              ref={reactiontimeRef}
            />
          </div> */}
        </div>

        <div className="formtwoContainer">
          <span>Experimental results</span>

          <Form.Group
            as={Row}
            controlId="formGridTurbidity"
            xs={12}
            style={{ alignItems: "stretch" }}
          >
            <Col>
              <Form.Label>Turbidity (NTU) </Form.Label>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={turbidityInitial}
                  onChange={(e) => setTurbidityInitial(e.target.value)}
                  ref={initialturbidityRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={turbidityFinal}
                  onChange={(e) => setTurbidityFinal(e.target.value)}
                  ref={finalturbidityRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(turbidityInitial, turbidityFinal)}
                  ref={turbidityremovalRef}
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridParameterB" xs={12}>
            <Col>
              <Form.Label>
                Total Microcystis (PC-IGS) (Log gene copies/L){" "}
              </Form.Label>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={totalmicrocystisInitial}
                  onChange={(e) => settotalmicrocystisInitial(e.target.value)}
                  ref={totalmicrocystisinitialRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={totalmicrocystisFinal}
                  onChange={(e) => settotalmicrocystisFinal(e.target.value)}
                  ref={totalmicrocystisfinalRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    totalmicrocystisInitial,
                    totalmicrocystisFinal
                  )}
                  ref={totalmicrocystisremovalRef}
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridParameterC" xs={12}>
            <Col>
              <Form.Label>mcyE Microcystis (Log gene copies/L)</Form.Label>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={mcyemicrocystisInitial}
                  onChange={(e) => setmcyemicrocystisInitial(e.target.value)}
                  ref={mcyemicrocystisinitialRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={mcyemicrocystisFinal}
                  onChange={(e) => setmcyemicrocystisFinal(e.target.value)}
                  ref={mcyemicrocystisfinalRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    mcyemicrocystisInitial,
                    mcyemicrocystisFinal
                  )}
                  ref={mcyemicrocystisremovalRef}
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridParameterD" xs={12}>
            <Col>
              <Form.Label>mcyE Planktothrix (Log gene copies/L)</Form.Label>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={mcyeplanktothrixInitial}
                  onChange={(e) => setmcyeplanktothrixInitial(e.target.value)}
                  ref={mcyeplanktothrixinitialRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={mcyeplanktothrixFinal}
                  onChange={(e) => setmcyeplanktothrixFinal(e.target.value)}
                  ref={mcyeplanktothrixfinalRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    mcyeplanktothrixInitial,
                    mcyeplanktothrixFinal
                  )}
                  ref={mcyeplanktothrixremovalRef}
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridParameterE" xs={12}>
            <Col>
              <Form.Label>Total Microcystins (ppb)</Form.Label>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={totalmicrocystinsInitial}
                  onChange={(e) => settotalmicrocystinsInitial(e.target.value)}
                  ref={totalmicrocystinsinitialRef}
                />
              </div>
            </Col>

            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={totalmicrocystinsFinal}
                  onChange={(e) => settotalmicrocystinsFinal(e.target.value)}
                  ref={totalmicrocystinsfinalRef}
                />
              </div>
            </Col>
            <Col>
              <div
                style={{ display: "inline-flex"}}
              >
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    totalmicrocystinsInitial,
                    totalmicrocystinsFinal
                  )}
                  ref={totalmicrocystinsremovalRef}
                />
              </div>
            </Col>
          </Form.Group>
        </div>
        <Button type="submit" className="submitButton">
          Submit
        </Button>
        {success && (
          <span className="success">Success</span>
        )}
        {error && <span className="failure">failed!</span>}
      </div>
    </Form>
  );
}


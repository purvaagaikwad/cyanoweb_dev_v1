import axios from "axios";
import { useRef, useState } from "react";
import "./cfsform.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormControl } from "@material-ui/core";

export default function SForm() {
  const locationsRef = useRef();
  const datesRef = useRef();
  const devicesRef = useRef();
  const modelsRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const watertempsRef = useRef();
  const waterphsRef = useRef();
  
  
  const wreactiontimesRef = useRef();
  

  const timeunitsRef = useRef();
  
  const initialturbiditysRef = useRef();
  const finalturbiditysRef = useRef();
  const turbidityremovalsRef = useRef();
  const totalmicrocystisinitialsRef = useRef();
  const totalmicrocystisfinalsRef = useRef();
  const totalmicrocystisremovalsRef = useRef();
  const mcyemicrocystisinitialsRef = useRef();
  const mcyemicrocystisfinalsRef = useRef();
  const mcyemicrocystisremovalsRef = useRef();
  const mcyeplanktothrixinitialsRef = useRef();
  const mcyeplanktothrixfinalsRef = useRef();
  const mcyeplanktothrixremovalsRef = useRef();
  const totalmicrocystinsinitialsRef = useRef();
  const totalmicrocystinsfinalsRef = useRef();
  const totalmicrocystinsremovalsRef = useRef();

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

  console.log("Success");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDataentry = {
      location: locationsRef.current.value,
      date: datesRef.current.value,
      device: devicesRef.current.value,
      model: modelsRef.current.value,
      watertemp: watertempsRef.current.value,
      waterph: waterphsRef.current.value,
      
      
      reactiontime: wreactiontimesRef.current.value,
      
      
      timeunit: timeunitsRef.current.value,
      
      initialturbidity: initialturbiditysRef.current.value,
      finalturbidity: finalturbiditysRef.current.value,
      turbidityremoval: turbidityremovalsRef.current.value,
      totalmicrocystisinitial: totalmicrocystisinitialsRef.current.value,
      totalmicrocystisfinal: totalmicrocystisfinalsRef.current.value,
      totalmicrocystisremoval: totalmicrocystisremovalsRef.current.value,
      mcyemicrocystisinitial: mcyemicrocystisinitialsRef.current.value,
      mcyemicrocystisfinal: mcyemicrocystisfinalsRef.current.value,
      mcyemicrocystisremoval: mcyemicrocystisremovalsRef.current.value,
      mcyeplanktothrixinitial: mcyeplanktothrixinitialsRef.current.value,
      mcyeplanktothrixfinal: mcyeplanktothrixfinalsRef.current.value,
      mcyeplanktothrixremoval: mcyeplanktothrixremovalsRef.current.value,
      totalmicrocystinsinitial: totalmicrocystinsinitialsRef.current.value,
      totalmicrocystinsfinal: totalmicrocystinsfinalsRef.current.value,
      totalmicrocystinsremoval: totalmicrocystinsremovalsRef.current.value,
    };

    try {
      await axios.post("/api/sformupload", newDataentry);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
    console.log(newDataentry);

    setValidated(true);
  };

  const locationoptions = [
    { label: "Lake Erie", value: "- 41.7019444, -83.261389" },
    { label: "Lake St. Mary", value: "- 40.5419444, -84.573333" },
    { label: "Ohio River", value: "Ohio River" },
  ];
  const [result2, setResult2] = useState(locationoptions.value);
  const chemicaloptions = [
    { label: "Polyethylene oxide", value: "Polyethylene oxide" },
    { label: "PolyDADMAC", value: "PolyDADMAC" },
    { label: "Sodium polyacrylate", value: "Sodium polyacrylate" },
    { label: "Other (Specify Below)", value: "Other (Specify Below)" },
  ];

  const [result1, setResult1] = useState(chemicaloptions.value);

  const timeunitoptions = [
    { label: "Min", value: "Min" },
    { label: "Sec", value: "Sec" },
  ];

  const [result, setResult] = useState(timeunitoptions.value);

  const resuHandler = (e) => {
    setResult(e.value);
  };

  const resuHandler1 = (e) => {
    setResult1(e.value);
  };

  const resuHandler2 = (e) => {
    setResult2(e.value);
  };

  const [date, setDate] = useState();

  function calculateValue(initialValue, finalValue) {
    console.log(initialValue, finalValue);
    if (initialValue && finalValue)
      return ((initialValue - finalValue) / initialValue) * 100;
    else return "";
  }

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
              <Select
                type="required"
                options={locationoptions}
                onChange={resuHandler2}
                placeholder="Select"
                ref={locationsRef}
              />
              <input type="hidden" value={result2} ref={locationsRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label> Date:</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control required type="date" ref={datesRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label>Model</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" ref={modelsRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label>Device</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" ref={devicesRef} />
            </Col>
          </Col>
        </Form.Group>
      </div>

      <div className="largerContainer">
        <span>User Input: Sedimentation</span>

        <div className="formoneContainer">
          <span>Experimental Conditions</span>
          <Form.Group as={Col} controlId="formWaterTemp" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Water Temperature (0-30)</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={watertempsRef} />
              </Col>
              <Col xs={2}>
                <Form.Label>(°C) </Form.Label>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="formWaterph" xs={12}>
            <Row>
              <Col xs={6} style={{ textAlign: "left" }}>
                <Form.Label> Water pH(0-14)</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={waterphsRef} />
              </Col>
              <Col xs={2}>
                <Form.Label></Form.Label>
              </Col>
            </Row>
          </Form.Group>

          {/* <Form.Group as={Col} controlId="chem" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Chemical Type</Form.Label>
              </Col>
              <Col xs={4}>
                <Select
                  options={chemicaloptions}
                  onChange={resuHandler1}
                  placeholder="Select"
                  ref={chemicalfRef}
                />
                <input type="hidden" value={result1} ref={chemicalfRef} />
              </Col>
              <Col xs={0}>
                <Form.Label></Form.Label>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="formOther" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Other Chemical Type</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control type="text" ref={otherchemicalfRef} />
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
                <Form.Control required type="text" ref={supplierfRef} />
              </Col>
              <Col xs={2}>
                <Form.Label> </Form.Label>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="formChem" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Chemical Dosage</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={chemicaldosagefRef} />
              </Col>
              <Col xs={2}>
                <Form.Label> mg/L </Form.Label>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="formWaterTemp" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Chemical Speed</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={chemicalspeedfRef} />
              </Col>
              <Col xs={2}>
                <Form.Label> rpm </Form.Label>
              </Col>
            </Row>
          </Form.Group> */}

          <Form.Group as={Col} xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Reaction Time</Form.Label>
              </Col>
              <Col xs={3}>
                <Form.Control required type="text" ref={wreactiontimesRef} />
              </Col>
              <Col xs={3}>
                <Form.Label>
                  <Select
                    options={timeunitoptions}
                    onChange={resuHandler}
                    placeholder="M/S"
                    ref={timeunitsRef}
                  />
                  <input type="hidden" value={result} ref={timeunitsRef} />
                </Form.Label>
              </Col>
            </Row>
          </Form.Group>
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
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={turbidityInitial}
                  onChange={(e) => setTurbidityInitial(e.target.value)}
                  ref={initialturbiditysRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={turbidityFinal}
                  onChange={(e) => setTurbidityFinal(e.target.value)}
                  ref={finalturbiditysRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(turbidityInitial, turbidityFinal)}
                  ref={turbidityremovalsRef}
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
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={totalmicrocystisInitial}
                  onChange={(e) => settotalmicrocystisInitial(e.target.value)}
                  ref={totalmicrocystisinitialsRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={totalmicrocystisFinal}
                  onChange={(e) => settotalmicrocystisFinal(e.target.value)}
                  ref={totalmicrocystisfinalsRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    totalmicrocystisInitial,
                    totalmicrocystisFinal
                  )}
                  ref={totalmicrocystisremovalsRef}
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridParameterC" xs={12}>
            <Col>
              <Form.Label>mcyE Microcystis (Log gene copies/L)</Form.Label>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={mcyemicrocystisInitial}
                  onChange={(e) => setmcyemicrocystisInitial(e.target.value)}
                  ref={mcyemicrocystisinitialsRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={mcyemicrocystisFinal}
                  onChange={(e) => setmcyemicrocystisFinal(e.target.value)}
                  ref={mcyemicrocystisfinalsRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    mcyemicrocystisInitial,
                    mcyemicrocystisFinal
                  )}
                  ref={mcyemicrocystisremovalsRef}
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridParameterD" xs={12}>
            <Col>
              <Form.Label>mcyE Planktothrix (Log gene copies/L)</Form.Label>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={mcyeplanktothrixInitial}
                  onChange={(e) => setmcyeplanktothrixInitial(e.target.value)}
                  ref={mcyeplanktothrixinitialsRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={mcyeplanktothrixFinal}
                  onChange={(e) => setmcyeplanktothrixFinal(e.target.value)}
                  ref={mcyeplanktothrixfinalsRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    mcyeplanktothrixInitial,
                    mcyeplanktothrixFinal
                  )}
                  ref={mcyeplanktothrixremovalsRef}
                />
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridParameterE" xs={12}>
            <Col>
              <Form.Label>Total Microcystins (ppb)</Form.Label>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Initial "
                  value={totalmicrocystinsInitial}
                  onChange={(e) => settotalmicrocystinsInitial(e.target.value)}
                  ref={totalmicrocystinsinitialsRef}
                />
              </div>
            </Col>

            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Final "
                  value={totalmicrocystinsFinal}
                  onChange={(e) => settotalmicrocystinsFinal(e.target.value)}
                  ref={totalmicrocystinsfinalsRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(
                    totalmicrocystinsInitial,
                    totalmicrocystinsFinal
                  )}
                  ref={totalmicrocystinsremovalsRef}
                />
              </div>
            </Col>
          </Form.Group>
        </div>
        <Button type="submit" className="submitButton">
          Submit
        </Button>
        {success && <span className="success">Success</span>}
        {error && <span className="failure">failed!</span>}
      </div>
    </Form>
  );
}

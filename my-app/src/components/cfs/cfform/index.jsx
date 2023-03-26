import axios from "axios";
import { useRef, useState } from "react";
import "./cfform.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormControl } from "@material-ui/core";

export default function FForm() {
  const locationfRef = useRef();
  const datefRef = useRef();
  const devicefRef = useRef();
  const modelfRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const watertempfRef = useRef();
  const waterphfRef = useRef();
  const supplierfRef = useRef();
  const chemicaldosagefRef = useRef();
  const reactiontimefRef = useRef();
  const chemicalfRef = useRef();
  const otherchemicalfRef = useRef();
  const timeunitfRef = useRef();
  const chemicalspeedfRef = useRef();
  const initialturbidityfRef = useRef();
  const finalturbidityfRef = useRef();
  const turbidityremovalfRef = useRef();
  const totalmicrocystisinitialfRef = useRef();
  const totalmicrocystisfinalfRef = useRef();
  const totalmicrocystisremovalfRef = useRef();
  const mcyemicrocystisinitialfRef = useRef();
  const mcyemicrocystisfinalfRef = useRef();
  const mcyemicrocystisremovalfRef = useRef();
  const mcyeplanktothrixinitialfRef = useRef();
  const mcyeplanktothrixfinalfRef = useRef();
  const mcyeplanktothrixremovalfRef = useRef();
  const totalmicrocystinsinitialfRef = useRef();
  const totalmicrocystinsfinalfRef = useRef();
  const totalmicrocystinsremovalfRef = useRef();

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
      location: locationfRef.current.value,
      date: datefRef.current.value,
      device: devicefRef.current.value,
      model: modelfRef.current.value,
      watertemp: watertempfRef.current.value,
      waterph: waterphfRef.current.value,
      supplier: supplierfRef.current.value,
      chemicaldosage: chemicaldosagefRef.current.value,
      reactiontime: reactiontimefRef.current.value,
      chemical: chemicalfRef.current.value,
      otherchemical: otherchemicalfRef.current.value,
      timeunit: timeunitfRef.current.value,
      chemicalspeed: chemicalspeedfRef.current.value,
      initialturbidity: initialturbidityfRef.current.value,
      finalturbidity: finalturbidityfRef.current.value,
      turbidityremoval: turbidityremovalfRef.current.value,
      totalmicrocystisinitial: totalmicrocystisinitialfRef.current.value,
      totalmicrocystisfinal: totalmicrocystisfinalfRef.current.value,
      totalmicrocystisremoval: totalmicrocystisremovalfRef.current.value,
      mcyemicrocystisinitial: mcyemicrocystisinitialfRef.current.value,
      mcyemicrocystisfinal: mcyemicrocystisfinalfRef.current.value,
      mcyemicrocystisremoval: mcyemicrocystisremovalfRef.current.value,
      mcyeplanktothrixinitial: mcyeplanktothrixinitialfRef.current.value,
      mcyeplanktothrixfinal: mcyeplanktothrixfinalfRef.current.value,
      mcyeplanktothrixremoval: mcyeplanktothrixremovalfRef.current.value,
      totalmicrocystinsinitial: totalmicrocystinsinitialfRef.current.value,
      totalmicrocystinsfinal: totalmicrocystinsfinalfRef.current.value,
      totalmicrocystinsremoval: totalmicrocystinsremovalfRef.current.value,
    };

    try {
      await axios.post("/api/fformupload", newDataentry);
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
                ref={locationfRef}
              />
              <input type="hidden" value={result2} ref={locationfRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label> Date:</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control required type="date" ref={datefRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label>Model</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" ref={modelfRef} />
            </Col>
          </Col>
          <Col>
            <Col xs={2}>
              <Form.Label>Device</Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control type="text" ref={devicefRef} />
            </Col>
          </Col>
        </Form.Group>
      </div>

      <div className="largerContainer">
        <span>User Input: Flocculation</span>

        <div className="formoneContainer">
          <span>Experimental Conditions</span>
          <Form.Group as={Col} controlId="formWaterTemp" xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Water Temperature (0-30)</Form.Label>
              </Col>
              <Col xs={4}>
                <Form.Control required type="text" ref={watertempfRef} />
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
                <Form.Control required type="text" ref={waterphfRef} />
              </Col>
              <Col xs={2}>
                <Form.Label></Form.Label>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} controlId="chem" xs={12}>
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
          </Form.Group>

          <Form.Group as={Col} xs={12}>
            <Row>
              <Col xs={6}>
                <Form.Label>Reaction Time</Form.Label>
              </Col>
              <Col xs={3}>
                <Form.Control required type="text" ref={reactiontimefRef} />
              </Col>
              <Col xs={3}>
                <Form.Label>
                  <Select
                    options={timeunitoptions}
                    onChange={resuHandler}
                    placeholder="M/S"
                    ref={timeunitfRef}
                  />
                  <input type="hidden" value={result} ref={timeunitfRef} />
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
                  ref={initialturbidityfRef}
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
                  ref={finalturbidityfRef}
                />
              </div>
            </Col>
            <Col>
              <div style={{ display: "inline-flex" }}>
                <Form.Control
                  readOnly
                  placeholder="Removal % "
                  value={calculateValue(turbidityInitial, turbidityFinal)}
                  ref={turbidityremovalfRef}
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
                  ref={totalmicrocystisinitialfRef}
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
                  ref={totalmicrocystisfinalfRef}
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
                  ref={totalmicrocystisremovalfRef}
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
                  ref={mcyemicrocystisinitialfRef}
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
                  ref={mcyemicrocystisfinalfRef}
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
                  ref={mcyemicrocystisremovalfRef}
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
                  ref={mcyeplanktothrixinitialfRef}
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
                  ref={mcyeplanktothrixfinalfRef}
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
                  ref={mcyeplanktothrixremovalfRef}
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
                  ref={totalmicrocystinsinitialfRef}
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
                  ref={totalmicrocystinsfinalfRef}
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
                  ref={totalmicrocystinsremovalfRef}
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

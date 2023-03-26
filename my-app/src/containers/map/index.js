import React, { useState,useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";
import { Map as Leafmap } from "../../components/Map/Map";
// import data from "./data.json";
//import { GLineChart } from "../../components/linechart";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { PageContainer } from "../../components/pageContainer";
import { InnerPageContainer } from "../../components/pageContainer";
import "./mapc.css"
import  Upload from "../Datauploadform";
import styled from "styled-components";
import axios from "axios";


// import moment from moment;


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";


const UploadbuttonContainer1 = styled.div`
     position: absolute;
     
    width: 500px;
    top: 13vh;
    left: 1em;
`;

const Map = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [data,setData]=useState([]);
  const dataNeeded = data; //This is where we will have the data for both map and the charts and can be passed to both of them so dynamic data updation happens until redux implementaion is done
  const [clicked, setClicked] = useState();
  useEffect(async() => {
    let mounted=true;
    await axios.get("/api/data").then(res=>setData(res.data.data))
    return () => mounted=false;
  }, [])
    console.log(data,"DATA")
    function unique(array, propertyName) {
        return array.length?array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i):[];
     }
    
    const dropDownData = unique(dataNeeded,'location')
     console.log(dropDownData)
  const dataSelected = dataNeeded.length?dataNeeded
    .filter((self) => clicked === self.location)
    .map((Obj) => {
        // Obj[modifiedDate]= 
        let dateUpdated = new Date(Obj.date)
        console.log(dateUpdated,"DATA NEEDED")
        Obj.date = new Date(Obj.date).toLocaleDateString()
        return Obj
    }).sort(function(x, y){
        let date1 = new Date(x.date);
        let date2 = new Date(y.date);
        return date1 - date2 ;
    }):[];

    console.log(dataSelected,"DATA SELECTED")

  const handleClick = (e) => {
    console.log(e,'inside handleclick parent');
    setClicked(e.location);
  };

  const renderLocationName=(obj)=>{
    return obj.length?<div>{obj[0].name}</div>:<></>;
  }
  return (
    <>
      <Navbar />

      {/* <Container> */}
        <Row xs={12} >
            <Col xs={5}>
              <Leafmap data={dropDownData} handleClick={handleClick} />
            </Col>
            <Col xs={6}>
                {renderLocationName(dataSelected)}
              <Row>
                <Col xs={6}>
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                    <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="date"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 30]}
                        interval={0}
                        tickCount={16}
                        // ticks={15}
                        label={{
                          value: "Temperature (Degree Celsius)",
                          angle: -90,
                          position: "insideBottomLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="red"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
                <Col xs={6}>
                  {" "}
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                        <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="category"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 14]}
                        interval={0}
                        tickCount={15}
                        // ticks={15}
                        label={{
                          value: "pH",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="ph"
                        stroke="blue"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  {" "}
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                        <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="category"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 20]}
                        interval={0}
                        tickCount={15}
                        // ticks={15}
                        label={{
                          value: "Dissolved Oxygen(mg/L)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="dissolvedoxygen"
                        stroke="green"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
                <Col xs={6}>
                  {" "}
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                        <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="category"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 50]}
                        interval={0}
                        tickCount={25}
                        // ticks={15}
                        label={{
                          value: "Turbidity(NTU)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="turbidity"
                        stroke="black"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
              </Row>
             
            </Col>
            <Row>
              <Col xs={3}>
                  {" "}
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                        <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="category"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 50]}
                        interval={0}
                        tickCount={25}
                        // ticks={15}
                        label={{
                          value: "Total Microcystis(Log gene copies/L)",
                          angle: -90,
                          position: "insideBottomLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="totalmicrocytis"
                        stroke="orange"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
                <Col xs={3}>
                  {" "}
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                        <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="category"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 50]}
                        interval={0}
                        tickCount={25}
                        // ticks={15}
                        label={{
                          value: "mcyE Microcytis (Log gene copies/L)",
                          angle: -90,
                          position: "insideBottomLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="mcyemicrocytis"
                        stroke="purple"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
                <Col xs={3}>
                  {" "}
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                        <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="category"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 50]}
                        interval={0}
                        tickCount={25}
                        // ticks={15}
                        label={{
                          value: "mcyE Planktothrix (Log gene copies/L)",
                          angle: -90,
                          position: "insideBottomLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="mcyeplanktothrix"
                        stroke="teal"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
                <Col xs={3}>
                  {" "}
                  <ResponsiveContainer width={"99%"} height={350}>
                    <LineChart
                      width={500}
                      height={450}
                      data={dataSelected}
                      margin={{
                        top: 15,
                        right: 30,
                        left: 30,
                        bottom: 15,
                      }}
                    >
                        <Legend verticalAlign="top" height={36}/>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        // type="category"
                        // ticks={["jan","feb","march"]}
                        // tickCount={3}
                        label={{
                          value: "Date",
                          offset: "-10",
                          position: "insideBottom",
                        }}
                      />

                      <YAxis
                        type="number"
                        domain={[0, 50]}
                        interval={0}
                        tickCount={25}
                        // ticks={15}
                        label={{
                          value: "Total Microcytins (ppb)",
                          angle: -90,
                          position: "insideBottomLeft",
                        }}
                      />
                      <Tooltip />
                      {/* <Legend /> */}
                      <Line
                        type="monotone"
                        dataKey="totalmicrocystins"
                        stroke="magenta"
                        strokeWidth={1.5}
                        activeDot={{ r: 9 }}
                      />
                      
                    </LineChart>
                  </ResponsiveContainer>
                </Col>

              </Row>
        </Row>
      {/* </Container> */}
      <UploadbuttonContainer1>
             <button
               className="button upload data"
               onClick={() => setShowRegister(true)}
             >
               Upload Raw Water Data
             </button>
             </UploadbuttonContainer1>
             {showRegister && <Upload setShowRegister={setShowRegister} />}
      <Footer />
    </>
  );
};

export default Map;

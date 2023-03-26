import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

const data = [


  {
    "location": "41.7019444, -83.261389",
    "name": "Erie",
    "date": "5/17/2022",
    "month": "May",
    "temperature": 16.7,
    "ph": "8.4",
    "turbidity": "5.0",
    "zetapotential": "n.a",
    "dissolvedoxygen": "12.2",
    "totaldissolvedsolids": "n.a",
    "electricalconductivity": "383"},

  {    "location": "41.7019444, -83.261389",
  "name": "Erie",
  "date": "7/19/2022",
  "month": "July",
  "temperature": 24.50,
  "ph": "8.7",
  "turbidity": "6.0",
  "zetapotential": "n.a",
  "dissolvedoxygen": "7.60",
  "totaldissolvedsolids": "144.8",
  "electricalconductivity": "289"},

  {
    "location": "41.7019444, -83.261389",
    "name": "Erie",
    "date": "09/16/2022",
    "month": "September",
    "temperature": 22.0,
    "ph": "8.6",
    "turbidity": "4.2",
    "zetapotential": "-18.3",
    "dissolvedoxygen": "8.4",
    "totaldissolvedsolids": "n.a",
    "electricalconductivity": "279"},

];

export default function App() {
  return (
    <><LineChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 30,
        bottom: 15
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        // type="category"
        // ticks={["jan","feb","march"]}
        // tickCount={3}
        label={{
          value: "Date",
          offset: '-10',
          position: "insideBottom"
        }} />

      <YAxis
        type="number"
        domain={[0, 30]}
        interval={0}
        tickCount={16}
        // ticks={15}
        label={{
          value: "Temperature (Degree Celsius)",
          angle: -90,
          position: "insideBottomLeft"
        }} />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="red"
        strokeWidth={1.5}
        activeDot={{ r: 9 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    
    <LineChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 30,
        bottom: 15
      }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          // type="category"
          // ticks={["jan","feb","march"]}
          // tickCount={3}
          label={{
            value: "Date",
            offset: '-10',
            position: "insideBottom"
          }} />

        <YAxis
          type="number"
          domain={[0, 14]}
          interval={0}
          tickCount={15}
          // ticks={15}
          label={{
            value: "pH",
            angle: -90,
            position: "insideLeft"
          }} />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="ph"
          stroke="blue"
          strokeWidth={1.5}
          activeDot={{ r: 9 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

      <LineChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 30,
        bottom: 15
      }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          // type="category"
          // ticks={["jan","feb","march"]}
          // tickCount={3}
          label={{
            value: "Date",
            offset: '-10',
            position: "insideBottom"
          }} />

        <YAxis
          type="number"
          domain={[0, 20]}
          interval={0}
          tickCount={15}
          // ticks={15}
          label={{
            value: "Dissolved Oxygen(mg/L)",
            angle: -90,
            position: "insideLeft"
          }} />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="dissolvedoxygen"
          stroke="green"
          strokeWidth={1.5}
          activeDot={{ r: 9 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

      <LineChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 15,
        right: 30,
        left: 30,
        bottom: 15
      }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          // type="category"
          // ticks={["jan","feb","march"]}
          // tickCount={3}
          label={{
            value: "Date",
            offset: '-10',
            position: "insideBottom"
          }} />

        <YAxis
          type="number"
          domain={[0, 50]}
          interval={0}
          tickCount={25}
          // ticks={15}
          label={{
            value: "Turbidity(NTU)",
            angle: -90,
            position: "insideLeft"
          }} />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="turbidity"
          stroke="black"
          strokeWidth={1.5}
          activeDot={{ r: 9 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      </>
  );
}
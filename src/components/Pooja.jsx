import React from "react";
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "../index.css";
import { NavLink } from "react-router-dom";
const Pooja = (props) => {
  const username =
    props.history.location.loanData.customerloanData.customerName;
  const graphData = props.history.location.loanData.customerloanData.emiData;
  console.log(graphData);

  return (
    <div>
      <br />
      <NavLink to="/" id="dash">
        Dashboard
      </NavLink>
      <h2 id="name">{username}</h2>
      <BarChart
        width={800}
        height={350}
        data={graphData}
        margin={{
          top: 10,
          right: 25,
          left: 20,
          bottom: 5,
        }}
      >
        <ReferenceLine x="05" label="Middle" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="loanAmount" fill="#696969" />
        <Bar dataKey="emiPayment" fill="#FFD39B" />
        <Bar dataKey="foreClosurePayment" fill="#CDAA7D" />
      </BarChart>
    </div>
  );
};

export default Pooja;

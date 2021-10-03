import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const CollectionAgent = (props) => {
  const [data, setData] = useState([]);

  const getMonths = (rawData) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const sortedData = [];
    for (let i = 0; i < rawData.length; i++) {
      for (let j = 0; j < rawData.length; j++) {
        if (rawData[j]._id === months[i]) sortedData.push(rawData[j]);
      }
    }
    return sortedData;
  };
  useEffect(() => {
    const collectionAgentName = props.location.loanData.customerloanData;
    axios
      .get(`http://localhost:4000/app/getemi?collectionAgentName=${collectionAgentName}`)
      .then((res) => {
        console.log(res.data.data);
        const sortedData = getMonths(res.data.data);

        setData(sortedData);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <BarChart
        width={800}
        height={350}
        data={data}
        margin={{
          top: 10,
          right: 25,
          left: 20,
          bottom: 5,
        }}
      >
        <ReferenceLine x="05" label="Middle" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#CDAA7D" />
      </BarChart>
    </div>
  );
};

export default CollectionAgent;

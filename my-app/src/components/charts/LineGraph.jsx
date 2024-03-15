import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const getRandomColor =()=>{
  const red = Math.floor(Math.random() * 128); 
  const green = Math.floor(Math.random() * 128); 
  const blue = Math.floor(Math.random() * 128);

  const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  
  return color;
}


const LineGraph = ({props:{data}})=>{
  const linesDataKeys = Object.keys(data[0]).filter(key => key !== 'name');
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 50,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {linesDataKeys.map((key, index) => (
        <Line key={index} type="monotone" dataKey={key} stroke={getRandomColor()} />
      ))}
    </LineChart>
  )
}

export default LineGraph
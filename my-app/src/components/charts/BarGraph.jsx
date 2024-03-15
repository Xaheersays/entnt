import React from "react";

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "January",
    product1: 4000,
    product2: 2400,
    amt: 2400
  },
  {
    name: "February",
    product1: 3000,
    product2: 1398,
    amt: 2210
  },
  {
    name: "March",
    product1: 2000,
    product2: 9800,
    amt: 2290
  },
  {
    name: "April",
    product1: 2780,
    product2: 3908,
    amt: 2000
  },
  {
    name: "May",
    product1: 1890,
    product2: 4800,
    amt: 2181
  },
  {
    name: "June",
    product1: 2390,
    product2: 3800,
    amt: 2500
  },
  {
    name: "July",
    product1: 3490,
    product2: 4300,
    amt: 2100
  }
];

export default function BarGraph() {
  return (
    <div className="">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="product1" fill="#8884d8" />
      <Bar dataKey="product2" fill="#82ca9d" />
    </BarChart>
    </div>
  );
}

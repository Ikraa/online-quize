import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div>
        <Nav />
        <div>
          <h1 className="text-black font-semibold text-center text-2xl pt-9">
            Statistics
          </h1>
          <h1 className="text-black font-semibold pl-10 py-6">
            Statistics of quiz sub and question:{" "}
          </h1>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="hotpink" />
          </BarChart>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default Statistics;

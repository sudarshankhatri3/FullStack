import React from "react";
import { useState, useEffect } from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "A", value: 23 },
  { name: "B", value: 34 },
];

// #region Sample data
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

// #endregion
export default function VendorDashboard() {
  return (
    <div>
      <div className="bg-[#FCF8FF] p-6 flex flex-wrap sm:flex-nowrap items-center gap-6">
        <div className="border-b-blue-300 p-6 h-50 w-full sm:w-1/2 lg:w-1/4 rounded-xl bg-[#FFFFFF] flex flex-col gap-4 border border-[#3182ce] hover:bg-red-50 hover:border-amber-500">
          <img src="..//revenu.png" alt="money" className="w-9 h-8" />
          <p className="font-medium text-[#474651]">TOTAL REVENUE</p>
          <p className="font-bold text-[#1A146B] text-2xl">$45454545</p>
        </div>
        <div className="border-b-blue-300 p-6 h-50 w-full sm:w-1/2 lg:w-1/4 rounded-xl bg-[#FFFFFF] flex flex-col gap-4 border border-[#3182ce] hover:bg-red-50 hover:border-amber-500">
          <img src="..//orders.png" alt="money" className="w-9 h-8" />
          <p className="font-medium text-[#474651]">TOTAL ORDERS</p>
          <p className="font-bold text-[#1A146B] text-2xl">34324</p>
        </div>
        <div className="border-b-blue-300 p-6 h-50 w-full sm:w-1/2 lg:w-1/4 rounded-xl bg-[#FFFFFF] flex flex-col gap-4 border border-[#3182ce] hover:bg-red-50 hover:border-amber-500">
          <img src="..//profil.png" alt="money" className="w-9 h-8" />
          <p className="font-medium text-[#474651]">TOTAL ORDERS</p>
          <p className="font-bold text-[#1A146B] text-2xl">34324</p>
        </div>

        <div className="border-b-blue-300 p-6 h-50 w-full sm:w-1/2 lg:w-1/4 rounded-xl bg-[#FFFFFF] flex flex-col gap-4 border border-[#3182ce] hover:bg-red-50 hover:border-amber-500">
          <img src="..//profil.png" alt="money" className="w-9 h-8" />
          <p className="font-medium text-[#474651]">TOTAL ORDERS</p>
          <p className="font-bold text-[#1A146B] text-2xl">34324</p>
        </div>
      </div>
      <div className="bg-[#FCF8FF] p-6 flex  flex-wrap sm:flex-nowrap  gap-6 border border-[#C8C5D3]">
        <div>
          <div>Categorical classification of Product</div>
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" isAnimationActive={true} />
            <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={true} />
            <ResponsiveContainer />
          </BarChart>
        </div>

        <div className="p-6 w-80 min-h-96 border border-[#C8C5D3] rounded-xl flex flex-col justify-start gap-8">
          <div className=" w-full border-b">
            <h3 className="text-[#5654A8] font-bold text-xl">User Segments</h3>
            <p className="text-[#777682] font-semibold text-[12px]">Demographic breakdown of active users</p>
          </div>
          <div>
            <PieChart
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius="50%"
                fill="#8884d8"
                isAnimationActive={true}
              />
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#82ca9d"
                label
                isAnimationActive={true}
              />
              <Tooltip defaultIndex={true} />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

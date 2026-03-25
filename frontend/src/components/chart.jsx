import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 700 },
  { name: "Mar", sales: 300 },
  { name: "Apr", sales: 900 },
  { name: "May", sales: 500 },
];

function Chart() {
  return (
     <div className=" min-w-full rounded-2xl shadow-md w-full h-[400px] p-4">
      <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* Grid */}
          <CartesianGrid strokeDasharray="10 10" />

          {/* X Axis */}
          <XAxis dataKey="name" />

          {/* Y Axis */}
          <YAxis dataKey="sales"/>

          {/* Tooltip (hover effect) */}
          <Tooltip />

          {/* Bar */}
          <Line dataKey="sales" stroke="#4F46E5" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

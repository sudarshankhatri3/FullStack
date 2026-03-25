import React from "react";
import {
  BarChart,
  Bar,
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
    <div className="bg-white p-5 rounded-2xl shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>

      <ResponsiveContainer width={600} height={600}>
        <BarChart data={data}>
          {/* Grid */}
          <CartesianGrid strokeDasharray="6 6" />

          {/* X Axis */}
          <XAxis dataKey="name" />

          {/* Y Axis */}
          <YAxis />

          {/* Tooltip (hover effect) */}
          <Tooltip />

          {/* Bar */}
          <Bar dataKey="sales" fill="#4F46E5" radius={[16,16,16, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
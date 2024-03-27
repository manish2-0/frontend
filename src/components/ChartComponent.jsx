// ChartComponent.js

import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartComponent = () => {
  // Example data
  const chartData = {
    options: {
      chart: {
        id: "basic-line-chart",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
    },
    series: [
      {
        name: "Monthly Sales",
        data: [30, 40, 35, 50, 49],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Monthly Sales Chart</h2>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ChartComponent;

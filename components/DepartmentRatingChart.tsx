"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface DepartmentRatingChartProps {
  data: Record<string, number>;
}

export const DepartmentRatingChart = ({ data }: DepartmentRatingChartProps) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Average Rating",
        data: Object.values(data),
        backgroundColor: "#3B82F6",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-4">
        Department-wise Average Ratings
      </h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

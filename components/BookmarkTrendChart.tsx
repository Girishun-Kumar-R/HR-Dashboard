"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart elements
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export const BookmarkTrendChart = () => {
  // Mock data for static trend line
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Bookmarked Employees",
        data: [3, 5, 7, 9],
        fill: false,
        borderColor: "#10B981",
        backgroundColor: "#10B981",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        precision: 0,
        stepSize: 1,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-4">
        Bookmark Trends Over Time
      </h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

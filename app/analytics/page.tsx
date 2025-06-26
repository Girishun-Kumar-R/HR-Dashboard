"use client";

import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { enrichUsers, departments } from "../../lib/enrichUsers";

Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend);

export default function AnalyticsPage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=20");
        const data = await res.json();
        const enriched = enrichUsers(data.users);
        setUsers(enriched);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  const getAvgRatingByDept = () => {
    return departments.map((dept) => {
      const deptUsers = users.filter((u) => u.department === dept);
      if (deptUsers.length === 0) return 0;
      const avg =
        deptUsers.reduce((acc, curr) => acc + curr.performanceRating, 0) /
        deptUsers.length;
      return parseFloat(avg.toFixed(2));
    });
  };

  const mockBookmarkTrends = Array.from({ length: 7 }, (_, i) =>
    Math.floor(Math.random() * 10 + i)
  );

  return (
    <main className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        📊 Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart: Average Ratings by Department */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            ⭐ Average Ratings by Department
          </h2>
          <Bar
            data={{
              labels: departments,
              datasets: [
                {
                  label: "Average Rating",
                  data: getAvgRatingByDept(),
                  backgroundColor: "#3b82f6",
                },
              ],
            }}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 5,
                  ticks: {
                    stepSize: 1,
                    color: "#6b7280",
                  },
                },
                x: {
                  ticks: {
                    color: "#6b7280",
                  },
                },
              },
              plugins: {
                legend: { display: false },
              },
            }}
          />
        </section>

        {/* Line Chart: Bookmark Trends */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            🔖 Bookmark Trends (Mock Data)
          </h2>
          <Line
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  label: "Bookmarks",
                  data: mockBookmarkTrends,
                  borderColor: "#10b981",
                  backgroundColor: "rgba(16, 185, 129, 0.2)",
                  pointBackgroundColor: "#10b981",
                  fill: true,
                  tension: 0.4,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 2,
                    color: "#6b7280",
                  },
                },
                x: {
                  ticks: {
                    color: "#6b7280",
                  },
                },
              },
            }}
          />
        </section>
      </div>
    </main>
  );
}

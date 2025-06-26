// ✅ FILE: app/employee/[id]/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RatingStars } from "../../../components/RatingStars";
import { Tabs } from "../../../components/Tabs";



interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  phone: string;
  address: string;
  rating: number;
  bio: string;
}

const mockPerformanceHistory = [
  { year: "2022", score: 3 },
  { year: "2023", score: 4 },
  { year: "2024", score: 5 },
];

const getBadgeColor = (rating: number) => {
  if (rating >= 4) return "bg-green-500";
  if (rating === 3) return "bg-yellow-500";
  return "bg-red-500";
};

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await res.json();
        const enriched = {
          ...data,
          department: ["Engineering", "HR", "Marketing", "Finance", "Sales"][data.id % 5],
          address: `${data.address?.address || "123 Main St"}, ${data.address?.city || "City"}`,
          rating: Math.ceil(Math.random() * 5),
          bio: `Hi, I'm ${data.firstName}. I am passionate about delivering results and working with great teams.`,
        };
        setUser(enriched);
        setLoading(false);
      } catch (err) {
        setError("User not found");
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error || !user) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{user.firstName} {user.lastName}</h1>
      <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-300">Email: {user.email}</p>
        <p className="text-gray-700 dark:text-gray-300">Phone: {user.phone}</p>
        <p className="text-gray-700 dark:text-gray-300">Age: {user.age}</p>
        <p className="text-gray-700 dark:text-gray-300">Department: {user.department}</p>
        <p className="text-gray-700 dark:text-gray-300">Address: {user.address}</p>
        <p className="text-gray-700 dark:text-gray-300">Bio: {user.bio}</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <RatingStars rating={user.rating} />
        <span className={`text-white text-xs px-2 py-1 rounded ${getBadgeColor(user.rating)}`}>
          {user.rating} Stars
        </span>
      </div>

      <Tabs
        tabs={[
          {
            label: "Overview",
            content: (
              <div>
                <p>Current Role: {user.department} Specialist</p>
                <p>Experience: {user.age - 20} years</p>
              </div>
            ),
          },
          {
            label: "Projects",
            content: (
              <ul className="list-disc pl-5">
                <li>Project Alpha - Internal Tools</li>
                <li>Project Beta - Client Engagement</li>
              </ul>
            ),
          },
          {
            label: "Feedback",
            content: (
              <ul className="list-disc pl-5">
                {mockPerformanceHistory.map((entry) => (
                  <li key={entry.year}>{entry.year}: Rated {entry.score} stars</li>
                ))}
              </ul>
            ),
          },
        ]}
      />
    </div>
  );
}

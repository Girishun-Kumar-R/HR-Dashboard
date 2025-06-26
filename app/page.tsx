"use client";

import { useEffect, useState } from "react";
import { enrichUsers } from "../lib/enrichUsers";
import { UserCard } from "../components/UserCard";
import { useSearch } from "../hooks/useSearch";
import Link from "next/link";

export default function HomePage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=20");
        const data = await res.json();
        const enriched = enrichUsers(data.users);
        setUsers(enriched);
        setLoading(false);
      } catch (err) {
        setError("Failed to load users");
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const {
    query,
    setQuery,
    departments,
    setDepartments,
    ratings,
    setRatings,
    filtered,
  } = useSearch(users);

  const departmentOptions = Array.from(
    new Set(users.map((u) => u.department))
  ).sort();

  const ratingOptions = [1, 2, 3, 4, 5];

  const toggleDepartment = (dept: string) => {
    if (departments.includes(dept)) {
      setDepartments(departments.filter((d) => d !== dept));
    } else {
      setDepartments([...departments, dept]);
    }
  };

  const toggleRating = (rating: number) => {
    if (ratings.includes(rating)) {
      setRatings(ratings.filter((r) => r !== rating));
    } else {
      setRatings([...ratings, rating]);
    }
  };

  return (
    <main className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6">
        HR Performance Dashboard
      </h1>

      {/* Navigation Links */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap text-sm font-medium">
        <Link href="/bookmarks" className="text-blue-600 hover:underline">
          🔖 Bookmarks
        </Link>
        <Link href="/analytics" className="text-blue-600 hover:underline">
          📊 Analytics
        </Link>
        <Link href="/create" className="text-blue-600 hover:underline">
          ➕ Create User
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 max-w-6xl mx-auto">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, email, or department"
          className="flex-1 px-4 py-2 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Department Multi-Select */}
        <div className="flex flex-wrap gap-2">
          {departmentOptions.map((dept) => (
            <button
              key={dept}
              onClick={() => toggleDepartment(dept)}
              className={`px-3 py-1 border rounded text-sm ${
                departments.includes(dept)
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Rating Multi-Select */}
        <div className="flex flex-wrap gap-2">
          {ratingOptions.map((r) => (
            <button
              key={r}
              onClick={() => toggleRating(r)}
              className={`px-3 py-1 border rounded text-sm ${
                ratings.includes(r)
                  ? "bg-yellow-400 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              ⭐ {r}
            </button>
          ))}
        </div>
      </div>

      {loading && <p className="text-center text-gray-600">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}

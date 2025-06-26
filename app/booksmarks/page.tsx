"use client";

import { useEffect, useState } from "react";
import { enrichUsers } from "../../lib/enrichUsers";
import { useBookmarks } from "../../store/bookmarksStore";
import { UserCard } from "../../components/UserCard";

export default function BookmarksPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { bookmarks, removeBookmark } = useBookmarks();

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

  const bookmarkedUsers = users.filter((user) => bookmarks.includes(user.id));

  return (
    <main className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        📌 Bookmarked Employees
      </h1>

      {loading && <p className="text-center text-gray-600">Loading users...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {bookmarkedUsers.length === 0 ? (
        <p className="text-center text-gray-500">No bookmarked employees.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookmarkedUsers.map((user) => (
            <div key={user.id} className="relative">
              <UserCard user={user} />

              <div className="flex justify-center gap-2 mt-2">
                <button
                  onClick={() => removeBookmark(user.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Remove Bookmark
                </button>
                <button
                  onClick={() => alert("Promoted!")}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  Promote
                </button>
                <button
                  onClick={() => alert("Assigned to project!")}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Assign to Project
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

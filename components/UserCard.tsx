"use client";

import { useBookmarks } from "../store/bookmarksStore";
import { RatingStars } from "./RatingStars";
import { usePathname } from "next/navigation";

export function UserCard({ user }: { user: any }) {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const pathname = usePathname();

  const isBookmarked = bookmarks.some((u) => u.id === user.id);
  const isBookmarksPage = pathname === "/bookmarks";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col justify-between space-y-2">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {user.email}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Age: {user.age}, Department: {user.department}
        </p>
      </div>

      <div>
        <RatingStars rating={user.performanceRating} />
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        <a
          href={`/employee/${user.id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View
        </a>

        <button
          onClick={() => toggleBookmark(user)}
          className={`text-sm px-2 py-1 rounded ${
            isBookmarked
              ? "bg-yellow-400 text-black"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          }`}
        >
          {isBookmarksPage ? "Remove" : isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>

        <button className="text-sm px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600">
          Promote
        </button>

        {isBookmarksPage && (
          <button className="text-sm px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">
            Assign to Project
          </button>
        )}
      </div>
    </div>
  );
}

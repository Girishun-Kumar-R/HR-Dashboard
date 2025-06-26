import { create } from "zustand";

type BookmarkState = {
  bookmarks: any[];
  history: { date: string; count: number }[];
  toggleBookmark: (user: any) => void;
  removeBookmark: (id: number) => void;
};

export const useBookmarks = create<BookmarkState>((set, get) => ({
  bookmarks: [],
  history: [],
  toggleBookmark: (user) => {
    const { bookmarks, history } = get();
    const exists = bookmarks.find((u) => u.id === user.id);
    const updated = exists
      ? bookmarks.filter((u) => u.id !== user.id)
      : [...bookmarks, user];

    const today = new Date().toLocaleDateString("en-GB");
    const count = updated.length;

    const updatedHistory = [
      ...history.filter((h) => h.date !== today),
      { date: today, count },
    ];

    set({ bookmarks: updated, history: updatedHistory });
  },
}));

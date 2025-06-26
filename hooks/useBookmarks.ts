import { useBookmarks as useZustandBookmarks } from '../store/bookmarksStore';

export const useBookmarks = () => {
  const bookmarks = useZustandBookmarks((state) => state.bookmarks);
  const toggleBookmark = useZustandBookmarks((state) => state.toggleBookmark);
  return { bookmarks, toggleBookmark };
};

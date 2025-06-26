// hooks/useSearch.ts
import { useState, useMemo } from 'react';

export const useSearch = (users: any[]) => {
  const [query, setQuery] = useState('');
  const [departments, setDepartments] = useState<string[]>([]);
  const [ratings, setRatings] = useState<number[]>([]);

  const filtered = useMemo(() => {
    const search = query.toLowerCase();

    return users.filter((user) => {
      const matchesQuery =
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.department.toLowerCase().includes(search);

      const matchesDepartment =
        departments.length === 0 || departments.includes(user.department);

      const matchesRating =
        ratings.length === 0 || ratings.includes(user.rating);

      return matchesQuery && matchesDepartment && matchesRating;
    });
  }, [users, query, departments, ratings]);

  return {
    query,
    setQuery,
    departments,
    setDepartments,
    ratings,
    setRatings,
    filtered,
  };
};

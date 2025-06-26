export const departments = ['HR', 'Engineering', 'Sales', 'Marketing', 'Finance'];

export const enrichUsers = (users: any[]) => {
  return users.map(user => ({
    ...user,
    department: departments[Math.floor(Math.random() * departments.length)],
    performanceRating: Math.ceil(Math.random() * 5),
    bio: 'Hardworking and dedicated team player.',
    history: Array.from({ length: 3 }, (_, i) => ({
      year: 2021 - i,
      rating: Math.ceil(Math.random() * 5)
    }))
  }));
};

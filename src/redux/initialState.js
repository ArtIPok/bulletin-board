export const initialState = {
  posts: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    logged: true,
    email: 'test@test.com',
  },
};

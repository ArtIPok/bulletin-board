export const initialState = {
  posts: {
    data: {
      id: '1',
      title: 'Title post',
      text1: 'This is my post',
      text2: 'Lorem ipsum',
    },
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

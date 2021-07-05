export const initialState = {
  posts: {
    data: {
      id: '1',
      author: 'John Doe',
      title: 'Title post',
      text1: 'This is my post',
      location: 'Lorem ipsum',
      price: '250 $',
      phone: '222 333 444',
      status: 'active',
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

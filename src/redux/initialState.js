export const initialState = {
  posts: {
    data: [{
      id: '',
      className: '',
      photo: '',
      title: 'Artur',
      created: '2021-07-09',
      updated: '2021-07-09',
      text: 'Lorem ipsum',
      userStatus: '',
    }],
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

export default [
  {
    url: '/api/getUser',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: 'helloworld',
      };
    },
  },
];

  
/* export default [
  {
    url: '/api/getRoleById',
    method: 'get',
    response: ({ query }) => {
      console.log('id>>>>>>>>', query.id);
      return {
        code: 0,
        message: 'ok',
        data: {
          roleName: 'admin',
          roleValue: 'admin',
        },
      };
    },
  },
]; */
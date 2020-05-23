import userData from './user.json';

const userMockLoginResponse = (email, password) => {
  if (email === 'test@test.com' && password === 'password') return userData;
  throw new Error('Invalid email or password');
};

export {
  userMockLoginResponse,
};

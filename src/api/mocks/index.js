/* istanbul ignore file */
import userData from './user.json';

const userMockLoginResponse = (email, password) => {
  if (email === 'test@test.com' && password === 'password') return userData;
  throw new Error('Invalid email or password');
};

const mockedPost = (url, body) => {
  switch (url.substring(17)) {
    case '/login': return userMockLoginResponse(body.email, body.password);
    default: throw new Error('Bad request');
  }
};

export {
  mockedPost,
};

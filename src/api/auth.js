import { getConfig } from '../../config';
import { post } from './requests';

const login = (email, password) => {
  const url = `${getConfig().SERVICE_URL}/login`;
  return post(url, { email, password });
};

// TODO: sign up, forgot password, renew token

export {
  login,
};

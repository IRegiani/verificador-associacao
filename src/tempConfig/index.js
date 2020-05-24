/* istanbul ignore file */
import developmentConfig from './development.json';
// TODO: this file should be config, but that require reconfiguring webpack
// move it back after ejecting create app
// TODO: test this file

export const getConfig = () => {
  // TODO: improve this
  if (process.env.NODE_ENV === ('development' || 'local')) return developmentConfig;
  return developmentConfig;
};

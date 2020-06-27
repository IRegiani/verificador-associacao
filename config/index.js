const configBase = {
  SERVICE_URL: 'TODO: SERVICE_URL',
};

const configProd = {
  SERVICE_API_KEY: '',
};

export const getConfig = () => {
  // TODO: improve this
  const env = process.env.NODE_ENV;
  if (env === 'local') return configBase;
  return { configBase, ...configProd };
};

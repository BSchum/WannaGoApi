const devConfig = {
  JWT_SECRET: 'thisisasecret',
  MONGO_URL: `mongodb://${process.env.DB_USER}:${process.env
    .DB_PASS}@ds111754.mlab.com:11754/nodejsapi-dev`,
};
const prodConfig = {
  JWT_SECRET: 'process.env.SECRET',
  MONGO_URL: `mongodb://${process.env.DB_USER}:${process.env
    .DB_PASS}@ds127044.mlab.com:${process.env.DB_PORT}/nodejsapi-prod`,
};
const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};

const config = {
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_HOST: process.env.REDIS_HOST || 'redis',
  REDIS_DB: process.env.REDIS_DB || '0',
};

export default config;

import { createClient } from 'redis';
import config from '../../config/redis';

const {
  REDIS_DB,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_AUTH_PASS,
} = config;

async function createRedisClient() {
  const connectionString = `redis://${REDIS_HOST}:${REDIS_PORT}/${REDIS_DB}`;

  const client = createClient({ url: connectionString });
  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  return client;
}

export default createRedisClient;

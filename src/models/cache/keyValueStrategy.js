import createClient from '../../infrastructure/redis/createClient';

class KeyValueStrategy {
  constructor() {
    this.cache = createClient();
  }

  connectToCache = async () => {
    this.cache = await createClient();
  };

  getValue = async (key) => {
    await this.connectToCache();
    const data = await this.cache.get(key);

    return JSON.parse(data);
  };

  addValue = async (key, value) => {
    await this.connectToCache();
    const data = JSON.stringify(value);

    await this.cache.set(key, data);
  };

  storeTTL = async (key, value, ttl = -1) => {
    await this.connectToCache();
    const data = JSON.stringify(value);

    try {
      await this.cache.set(key, data);
      await this.cache.expire(key, ttl);
    } catch (err) {
      console.log(err);
    }
  };
}

export default KeyValueStrategy;

import KeyValueStrategy from '../../models/cache/keyValueStrategy';
import getSubscriptionKey from './getKey';

const getSubscription = async (id) => {
  const key = getSubscriptionKey(id);

  const keyValueStrategy = new KeyValueStrategy();
  const cachedData = await keyValueStrategy.getValue(key);

  return cachedData;
};

export default getSubscription;

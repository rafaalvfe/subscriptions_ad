import KeyValueStrategy from '../../models/cache/keyValueStrategy';
import getSubscriptionKey from './getKey';

const addSubscription = async (subscription, ttl = -1) => {
  const { _id: id } = subscription;
  const key = getSubscriptionKey(id);

  const keyValueStrategy = new KeyValueStrategy();

  await keyValueStrategy.storeTTL(key, subscription, ttl);
};

export default addSubscription;

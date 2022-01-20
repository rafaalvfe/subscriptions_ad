const { SUBSCRIPTION_TTL } = process.env || 6000000;

const getSubscriptionByIdUseCase = (subscriptionRepository, subscriptionCache) => {
  const execute = async (id) => {
    const cachedSubscription = await subscriptionCache.getSubscription(id);

    if (cachedSubscription) {
      console.log('cached value returned');
      return cachedSubscription;
    }

    const subscriptions = await subscriptionRepository.findSubscriptions({
      maxResults: 1,
      subscriptionId: id,
    });

    if (subscriptions.length > 0) {
      const result = subscriptions[0];

      await subscriptionCache.addSubscription(result, SUBSCRIPTION_TTL);

      return result;
    }

    return null;
  };

  return execute;
};

export default getSubscriptionByIdUseCase;

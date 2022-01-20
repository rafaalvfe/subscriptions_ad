const getAllSubscriptionsUseCase = (subscriptionRepository) => {
  const execute = async () => {
    const subscriptions = await subscriptionRepository.findSubscriptions({
      maxResults: null,
      onlyActive: true,
    });

    const response = {
      results: subscriptions,
      totalResults: subscriptions.length,
    };

    return response;
  };

  return execute;
};

export default getAllSubscriptionsUseCase;

import subscriptionRepository from './repositories/subscription-repository';
import subscriptionCache from './repositories/subscription-cache';

import createNewSubscriptionUseCase from './domain/use-cases/subscriptions/createSubscription';
import getAllSubscriptionsUseCase from './domain/use-cases/subscriptions/getAllSubscriptions';
import getSubscriptionByIdUseCase from './domain/use-cases/subscriptions/getSubscriptionById';

// USE CASES

export const createNewSubscriptionCommand = createNewSubscriptionUseCase(subscriptionRepository);
export const getAllSubscriptionsCommand = getAllSubscriptionsUseCase(subscriptionRepository);

export const getSubscriptionCommand = getSubscriptionByIdUseCase(
  subscriptionRepository,
  subscriptionCache,
);

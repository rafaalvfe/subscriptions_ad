import validator from '../validators/validator';
import { checkNewSubscription } from '../validators/subscriptions';

import subscriptionsController from '../controllers/subscriptions-controller';

const routes = (app) => {
  // Create new subscription
  app.post(
    '/subscription',
    // TO-DO: token validator
    validator(checkNewSubscription),
    subscriptionsController.newSubscription,
  );

  // Get all subscriptions
  app.get(
    '/subscriptions',
    subscriptionsController.getAllSubscriptions,
  );

  // Get all subscriptions
  app.get(
    '/subscriptions/:id',
    subscriptionsController.getSubscription,
  );
};

export default routes;

import Subscription from '../../models/subscriptionModel';

const findSubscriptions = async ({
  // Paging options
  maxResults = 10,
  page = 1,
  subscriptionId = null,
  onlyActive = true,
  onlyFalse = false,
}) => {
  const limit = maxResults || 0;
  const skip = limit * (page - 1);

  const subscriptions = await Subscription
    .find({
      ...(subscriptionId && { _id: subscriptionId }),
      ...(onlyActive && { consent: true }),
      ...(onlyFalse && { consent: false }),
    })
    .where('consent')
    .equals(true)
    .select(['firstName', 'birthdate', 'email', 'gender', 'newsletterId'])
    .setOptions({
      ...(limit && { limit }),
      ...(limit && { skip }),
    })
    .lean()
    .exec();

  return subscriptions;
};

export default findSubscriptions;

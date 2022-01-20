import mongoose from 'mongoose';
import SubscriptionModel from '../../models/subscriptionModel';

const createSubscription = async ({
  email,
  firstName,
  gender,
  birthdate,
  newsletterId,
  consent,
}) => {
  try {
    const newSubscription = new SubscriptionModel({
      email,
      firstName,
      gender,
      birthdate,
      newsletterId,
      consent,
    });

    const { _id: id } = await newSubscription.save();

    return id;
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      console.log('validation err, ', e);
    }

    throw e;
  }
};

export default createSubscription;

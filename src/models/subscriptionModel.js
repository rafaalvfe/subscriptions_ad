import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Subscription must have an email'],
    index: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: [true, 'Subscription must have an email'],
  },
  birthdate: {
    type: Date,
    required: [true, 'Subscription must contain DoB'],
  },
  newsletterId: {
    type: String,
    required: [true, 'Subscription must be associated to newsletter ID'],
  },
  consent: {
    type: Boolean,
    required: [true, 'Subscription must have consent flag'],
  },
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;

import { createNewSubscriptionCommand } from '../../../dependencies';

const newSubscription = async (req, res) => {
  const {
    email,
    firstName,
    gender,
    birthdate,
    newsletterId,
    consent,
  } = req.body;

  try {
    const id = await createNewSubscriptionCommand({
      email,
      firstName,
      gender,
      birthdate,
      newsletterId,
      consent,
    });

    res.status(200).send({ subscriptionId: id });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: 'Error while creating subscription' });
  }
};

export default newSubscription;

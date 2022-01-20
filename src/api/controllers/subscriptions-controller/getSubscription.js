import { getSubscriptionCommand } from '../../../dependencies';

const getSubscription = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getSubscriptionCommand(id);

    if (!result) {
      return res.status(404).send();
    }

    return res.send(result);
  } catch (e) {
    return res.status(500).send({ error: 'unknown', stack: JSON.stringify(e) });
  }
};

export default getSubscription;

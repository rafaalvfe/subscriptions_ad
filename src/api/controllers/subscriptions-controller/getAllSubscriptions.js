import { getAllSubscriptionsCommand } from '../../../dependencies';

const getAllSubscriptions = async (req, res) => {
  try {
    const result = await getAllSubscriptionsCommand();
    res.send(result);
  } catch (e) {
    res.status(500).send({ error: 'unknown' });
  }
};

export default getAllSubscriptions;

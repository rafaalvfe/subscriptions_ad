import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './src/config/config';
import routes from './src/api/routes';

const {
  MONGO_USER,
  MONGO_IP,
  MONGO_PORT,
  MONGO_PASSWORD,
} = config;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB');
  } catch (error) {
    console.log(error);
  }
};

async function init() {
  try {
    // Connect to DB
    await connectWithRetry();

    // Routes init
    routes(app);

    app.all('*', (req, res) => res.status(404).send());

    // express service init
    app.listen(port, () => { console.log(`Listening on port ${port}`); });
  } catch (err) {
    console.log(err);
  }
}

init();

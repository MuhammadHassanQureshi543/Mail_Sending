const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const serverless = require('serverless-http');
const userRouter = require('./routes/userRoutes.js'); // Update the path here
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({
  path: './data/config.env'
});

const app = express();

app.use(bodyParser.json());
app.enable('trust proxy');
app.use(bodyParser());
app.use(cors());
app.options('*', cors());

app.use('/api/v1/user', userRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

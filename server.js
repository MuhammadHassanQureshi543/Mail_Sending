const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const serverless = require('serverless-http');
const userRouter = require('./routes/userRoutes')
const cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.enable('trust proxy')
app.use(bodyParser());
app.use(cors());
app.options('*',cors());

app.use('/api/v1/user', userRouter)

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


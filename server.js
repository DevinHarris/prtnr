const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const prtnrRouter = require('./routes/prtnr');
const connectDB = require('./config/db');
const app = express();

// use dotenv for Env
dotenv.config({
    path: './config/config.env'
})

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use(express.json());
connectDB();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/', prtnrRouter);

app.listen(PORT, () => console.log(`prtnr running on port ${PORT} in ${NODE_ENV} mode.`))
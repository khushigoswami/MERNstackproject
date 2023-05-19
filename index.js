import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import Routes from './routes/route.js';
const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', Routes);


const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

Connection();

app.listen(PORT,() => console.log(`server is running successfully on port ${PORT}`));
//express server made by listen function. It will take two arguments 1) port number 2) callback function
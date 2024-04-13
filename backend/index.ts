import express from 'express';
import dotenv from 'dotenv'

import BodyParser from "body-parser";

import { networks } from "./networks";

dotenv.config({
    path: './../.env'
});

const PORT = process.env.BACKEND_PORT_LISTEN;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(BodyParser.json());

// Endpoints
networks(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
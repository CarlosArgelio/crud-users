import express from 'express';

import BodyParser from "body-parser";

import middlewares from "./middlewares";
import { networks } from "./networks";
import { config } from "./configuration/config";

const { logErrors, errorHandler, boomErrorHandler } = middlewares;

const { port } = config;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(BodyParser.json());

// Endpoints
networks(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
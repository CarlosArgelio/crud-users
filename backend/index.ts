import express from 'express';
import dotenv from 'dotenv'

dotenv.config({
    path: './../.env'
});

const PORT = process.env.BACKEND_PORT_LISTEN;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
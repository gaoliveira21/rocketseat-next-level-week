import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({ msg: 'Hello' }));

app.listen(3333);

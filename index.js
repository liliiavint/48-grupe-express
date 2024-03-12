console.clear();

import express from 'express';
import { helpMe } from './middlewares/helpMe.js';
import { router } from './routes/index.js';
import { apiRouter } from './api/index.js';

const app = express();
const port = 4811;

app.use(express.static('static'));

app.use(helpMe);
app.use(apiRouter);
app.use(router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}`);
});
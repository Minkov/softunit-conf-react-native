import express from 'express';
import bodyParser from 'body-parser';
import { attachTo } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

attachTo(app);

export default app;
import express from 'express';
import bodyParser from 'body-parser';
import templates from './router/templates';

let app = express();
app.use(bodyParser.json());

app.use('/templates', templates);

app.listen(3002);

import express from 'express';
import bodyParser from 'body-parser';
import {templatesRouter, instancesRouter} from './router/router';

let app = express();
app.use(bodyParser.json());

app.use('/templates', templatesRouter);
app.use('/instances', instancesRouter);

app.get('/users', (req, res) => {
	res.send('ok');
});

app.listen(3002, () => console.log('done'));

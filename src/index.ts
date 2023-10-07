import express, { json } from 'express';
import DBuser from './database/users.json'
import jsonfile from 'jsonfile';

const app = express();
const PORT = 45000;

app.use(express.json());

app.get('/api', (req, res) => {
	res.json({
		name: 'Deploy test API',
		version: '1.0.0',
		server: 'running',
	});
});

app.get('/api/data', (req, res) => {
	res.json(DBuser);
});

app.post('/api/data', (req, res) => {
	/* const { username, email } = req.body;

		DBuser.push({ username, email }); */
		const { username, email } = req.body;
		DBuser.push({ username, email } );
		jsonfile.writeFileSync('./src/database/users.json', DBuser);
		res.status(201).json(req.body)

});

app.use('*', (req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

app.listen(PORT, () => {
	console.log('Server running on port', PORT);
});

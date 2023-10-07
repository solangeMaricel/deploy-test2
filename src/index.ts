import express from 'express';
import DBuser from './database/user.json'
import { writeFile } from 'jsonfile';

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
	const { username, email } = req.body;

		DBuser.push({ username, email });

		writeFile('./src/database/users.json', DBuser);

		return { username, email };
});

app.use('*', (req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

app.listen(PORT, () => {
	console.log('Server running on port', PORT);
});

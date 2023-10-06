import express from 'express';

const app = express();
const PORT = 45000;

app.get('/api', (req, res) => {
	res.json({
		name: 'Deploy test API',
		version: '1.0.0',
		server: 'running',
	});
});

app.get('/api/data', (req, res) => {
	res.json([
		{
			username: 'jrodriguez',
			email: 'jr@gmail.com',
		},
		{
			username: 'jjuan',
			email: 'jj@gmail.com',
		},
		{
			username: 'carolina',
			email: 'caro@gmail.com',
		},
		{
			username: 'nestor',
			email: 'nn@gmail.com',
		},
	]);
});

app.use('*', (req, res) => {
	res.status(404).json({ message: 'Resource not found' });
});

app.listen(PORT, () => {
	console.log('Server running on port', PORT);
});

import express, { Express } from 'express';
import cors from 'cors';
import routes from '../routes';

export default function createApp(): Express {
	const app = express();
	app.use(express.json());
	app.use(express.urlencoded());

	app.use(cors({ origin: ['http://localhost:3001'], credentials: true }));

	app.use((req, res, next) => setTimeout(() => next(), 500));

	app.use('/api', routes);

	return app;
}

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './middlewares/errorHandler';
import { validationErrorHandler } from './middlewares/validationErrorHandler';

dotenv.config();

const app = express();

// Middleware: HTTP headers security
app.use(helmet());

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true
  })
);

app.use(morgan('dev'));
app.use(compression());

app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

app.disable('x-powered-by');

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

app.use(validationErrorHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});

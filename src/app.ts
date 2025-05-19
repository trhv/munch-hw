import express from 'express';
import { json } from 'body-parser';
import { RootRoutes } from './routes/routes';
import { errorHandler } from './middleware/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(errorHandler);

// Register routes
const rootRoutes = new RootRoutes();
app.use('/', rootRoutes.router);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

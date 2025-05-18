import express from 'express';
import { json } from 'body-parser';
import { ScrapRoutes } from './routes/scrape';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

// Register routes
const scrapRoutes = new ScrapRoutes();
app.use('/', scrapRoutes.router);



app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

import express from 'express';
import { json } from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.get('/', (_req, res) => {
  res.send('Website Summary Scraper is running.');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

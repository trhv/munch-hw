
import { Request, Response } from 'express';
import {scrape} from '../services/scrapeService'
import { z } from 'zod';

export const scrapeWebsiteHandler = async (req: Request, res: Response) => {
  const { url } = req.body;
  const optionalUrl = z.union([z.string().url(), z.literal("")]);
  const result = optionalUrl.safeParse(url);

  if (!result.success) {
    res.status(400).json({ error: 'Invalid or missing URL.' });
  }
  const scrapeResult = await scrape(url);
  res.status(200).json(scrapeResult);
};

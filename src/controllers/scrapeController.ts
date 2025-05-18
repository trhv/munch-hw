
import { Request, Response } from 'express';
import { z } from 'zod';

export const scrapeWebsite = async (req: Request, res: Response) => {
  const { url } = req.body;
  const optionalUrl = z.union([z.string().url(), z.literal("")]);
  const result = optionalUrl.safeParse(url);

  if (!result.success) {
    res.status(400).json({ error: 'Invalid or missing URL.' });
  }

  res.send(`Start Scraping: ${url}`)
};

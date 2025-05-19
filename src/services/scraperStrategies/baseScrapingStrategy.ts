import * as cheerio from 'cheerio';

export interface BaseScrapingStrategy {
  extract($: cheerio.Root, baseUrl: string): any;
}
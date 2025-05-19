
import * as cheerio from 'cheerio';
import { BaseScrapingStrategy } from './baseScrapingStrategy'
import { extractProduct, extractPrice, extractDescription } from '../../utils/scraperUtils'

export class ProductStrategy implements BaseScrapingStrategy {
  async extract($: cheerio.Root, baseUrl: string) {

    return {
      product: await extractProduct($),
      price: await extractPrice($),
      description: await extractDescription($)
    };
  }
}
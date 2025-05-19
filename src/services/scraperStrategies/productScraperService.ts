
import * as cheerio from 'cheerio';
import { extractCommonData } from '../commonScraper'
import { BaseScrapingStrategy } from './baseScrapingStrategy'
import { extractProduct, extractPrice, extractDescription } from '../../utils/scraperUtils'

export class ProductStrategy implements BaseScrapingStrategy {
  async extract($: cheerio.Root, baseUrl: string) {

    return {
      ...(await extractCommonData),
      product: await extractProduct($),
      price: await extractPrice($),
      description: await extractDescription($)
    };
  }
}
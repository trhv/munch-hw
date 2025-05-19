
import * as cheerio from 'cheerio';
import { BaseScrapingStrategy } from './baseScrapingStrategy'
import { extractCodeSamples } from '../../utils/scraperUtils'

export class DocumentStrategy implements BaseScrapingStrategy {
  async extract($: cheerio.Root, baseUrl: string) {

    return {
      codeSamples: await extractCodeSamples($),
    };
  }
}

import * as cheerio from 'cheerio';
import { extractCommonData } from '../commonScraper'
import { BaseScrapingStrategy } from './baseScrapingStrategy'
import { extractAuthor, extractPublishDate } from '../../utils/scraperUtils'

export class ArticleStrategy implements BaseScrapingStrategy {
  async extract($: cheerio.Root, baseUrl: string) {

    return {
      ...(await extractCommonData),
      author: await extractAuthor($),
      publishDate: await extractPublishDate($)
    };
  }
}
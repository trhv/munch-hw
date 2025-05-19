
import * as cheerio from 'cheerio';
import { extractCommonData } from '../commonScraper'
import { BaseScrapingStrategy } from './baseScrapingStrategy'
import { extractAuthor, extractMainContent, extractPublishDate } from '../../utils/scraperUtils'

export class ArticleStrategy implements BaseScrapingStrategy {
  async extract($: cheerio.Root, baseUrl: string) {

    return {
      ...(await extractCommonData),
      author: await extractAuthor($),
      mainContent: await extractMainContent($),
      publishDate: await extractPublishDate($)
    };
  }
}
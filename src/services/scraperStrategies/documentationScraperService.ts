
import * as cheerio from 'cheerio';
import { extractCommonData } from '../commonScraper'
import { BaseScrapingStrategy } from './baseScrapingStrategy'
import { extractSidebarMenu, extractCodeSamples } from '../../utils/scraperUtils'

export class DocumentStrategy implements BaseScrapingStrategy {
  async extract($: cheerio.Root, baseUrl: string) {

    return {
      ...(await extractCommonData),
      codeSamples: await extractCodeSamples($),
      sideMenu: await extractSidebarMenu($)
    };
  }
}
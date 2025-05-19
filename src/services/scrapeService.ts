import axios from 'axios';
import * as cheerio from 'cheerio';
import { Logger } from '../utils/logger'
import { BaseScrapingStrategy } from './scraperStrategies/baseScrapingStrategy'
import { ArticleStrategy } from './scraperStrategies/articleScraperService'
import { DocumentStrategy } from './scraperStrategies/documentationScraperService'
import { ProductStrategy } from './scraperStrategies/productScraperService'

const logger = new Logger();
const strategyMap: Record<string, BaseScrapingStrategy> = {
  article: new ArticleStrategy(),
  product: new ProductStrategy(),
  documentation: new DocumentStrategy()
};

const getPageType = async ($: cheerio.Root, url: string) => {
  const hasArticleTag = $('article').length > 0;
  const hasTimeTag = $('time').length > 0;
  const hasPrice = $('[itemprop=price], .price').length > 0;
  const ogType = $('meta[property="og:type"]').attr('content') || '';
  let pageType: string = '';

  if (ogType === 'article' || hasArticleTag || hasTimeTag) {
    pageType = 'article';
  } else if (ogType === 'product' || hasPrice) {
    pageType = 'product';
  } else if (url.includes('/docs') || $('code').length > 5) {
    pageType = 'documentation';
  }
  logger.info(`The Website: ${webkitURL}, is of Type is: ${pageType}`);
  return pageType;
}

export const scrape = async (webSiteUrl: string) => {

  const response = await axios.get(webSiteUrl);
  const html = response.data;
  const $ = cheerio.load(html);

  const pageType = await getPageType($, webSiteUrl);
  const strategy = strategyMap[pageType];
  const typeSpecific = await strategy.extract($, webSiteUrl);
  return {
    pageType,
    ...typeSpecific
  }
};


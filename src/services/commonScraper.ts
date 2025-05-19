import * as cheerio from 'cheerio';
import {
  extractTitle, extractHeadings,
  extractImages, extractMetaData,
  extractParagraphs
} from '../utils/scraperUtils'

export const extractCommonData = async ($: cheerio.Root, webSiteUrl: string) => {

  return {
    title: await extractTitle($),
    metaDescription: await extractMetaData($),
    headings: await extractHeadings($),
    paragraphs: await extractParagraphs($),
    images: await extractImages($, webSiteUrl)
  }
}
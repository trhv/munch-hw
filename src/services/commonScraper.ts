import * as cheerio from 'cheerio';
import {
  extractTitle, extractHeadings,
  extractImages, extractMetaData,
  extractParagraphs
} from '../utils/scraperUtils'

export const extractCommonData = async ($: cheerio.Root, webSiteUrl: string) => {

  return {
    title: extractTitle($),
    metaDescription: extractMetaData($),
    headings: extractHeadings($),
    paragraphs: extractParagraphs($),
    images: extractImages($, webSiteUrl)
  }
}
import * as cheerio from 'cheerio';
import { Logger } from './logger'

const logger = new Logger();

export const extractTitle = async ($: cheerio.Root) => {
  try {
    const title = $('title').text();
    return title;
  } catch (error: any) {
    logger.error(`Failed Extracting Title with Error: ${error.message}`);
    return "";
  }
}

export const extractMetaData = async ($: cheerio.Root) => {
  try {
    const metaDescription = $('meta[name="description"]').attr('content') || '';
    return metaDescription;
  } catch (error: any) {
    logger.error(`Failed Extracting MetaData with Error: ${error.message}`);
    return "";
  }
}

export const extractHeadings = async ($: cheerio.Root) => {
  try {
    const headings: string[] = [];
    $('h1, h2').each((_i, el) => {
      headings.push($(el).text().trim());
    });
    return headings;
  } catch (error: any) {
    logger.error(`Failed Extracting Headings with Error: ${error.message}`);
    return "";
  }
}


export const extractParagraphs = async ($: cheerio.Root) => {
  try {
    const paragraphs: string[] = [];
    $('p').slice(0, 5).each((_i, el) => {
      const text = $(el).text().trim();
      if (text) paragraphs.push(text);
    });
    return paragraphs;
  } catch (error: any) {
    logger.error(`Failed Extracting Paragraphs with Error: ${error.message}`);
    return "";
  }
}

export const extractImages = async ($: cheerio.Root, url: string) => {
  try {
    const images: string[] = [];
    $('img').each((_i, el) => {
      const src = $(el).attr('src');
      if (src && !src.startsWith('data:')) {
        const absoluteSrc = src.startsWith('http') ? src : new URL(src, url).href;
        images.push(absoluteSrc);
      }
    });
    return images;
  } catch (error: any) {
    logger.error(`Failed Extracting Images with Error: ${error.message}`);
    return "";
  }
}

export const extractProduct = async ($: cheerio.Root) => {
  try {
    const productName = $("h1, .product-title").first().text().trim();
    return productName;
  } catch (error: any) {
    logger.error(`Failed Extracting Product with Error: ${error.message}`);
    return "";
  }
}

export const extractPrice = async ($: cheerio.Root) => {
  try {
    const price = $("[itemprop=price], .price").first().text().trim();
    return price;
  } catch (error: any) {
    logger.error(`Failed Extracting Price with Error: ${error.message}`);
    return "";
  }
}

export const extractDescription = async ($: cheerio.Root) => {
  try {
    const description = $(".product-description").first().text().trim() || "";
    return description;
  } catch (error: any) {
    logger.error(`Failed Extracting Description with Error: ${error.message}`);
    return "";
  }
}

export const extractCodeSamples = async ($: cheerio.Root) => {
  try {
    const codeSamples: string[] = $("pre code").slice(0, 3).map((_i, el) => $(el).text().trim()).get();
    return codeSamples;
  } catch (error: any) {
    logger.error(`Failed Extracting Code Samples with Error: ${error.message}`);
    return "";
  }
}

export const extractPublishDate = async ($: cheerio.Root) => {
  try {
    const publishedAt = $("time").first().attr("datetime") || $("time").first().text().trim();
    return publishedAt;
  } catch (error: any) {
    logger.error(`Failed Extracting Publish Date with Error: ${error.message}`);
    return "";
  }
}

export const extractAuthor = async ($: cheerio.Root) => {
  try {
    const author = $("meta[name=\"author\"]").attr("content") || $("[class*=author]").first().text().trim();
    return author;
  } catch (error: any) {
    logger.error(`Failed Extracting Author with Error: ${error.message}`);
    return "";
  }
}


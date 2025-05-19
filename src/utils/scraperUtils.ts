import * as cheerio from 'cheerio';

export const extractTitle = async ($: cheerio.Root) => {
  const title = $('title').text();
  return title;
}

export const extractMetaData = async ($: cheerio.Root) => {
  const metaDescription = $('meta[name="description"]').attr('content') || '';
  return metaDescription;
}

export const extractHeadings = async ($: cheerio.Root) => {
  const headings: string[] = [];
  $('h1, h2').each((_i, el) => {
    headings.push($(el).text().trim());
  });
  return headings;
}


export const extractParagraphs = async ($: cheerio.Root) => {
  const paragraphs: string[] = [];
  $('p').slice(0, 5).each((_i, el) => {
    const text = $(el).text().trim();
    if (text) paragraphs.push(text);
  });
  return paragraphs;
}

export const extractImages = async ($: cheerio.Root, url: string) => {
  const images: string[] = [];
  $('img').each((_i, el) => {
    const src = $(el).attr('src');
    if (src && !src.startsWith('data:')) {
      const absoluteSrc = src.startsWith('http') ? src : new URL(src, url).href;
      images.push(absoluteSrc);
    }
  });
  return images;
}

export const extractProduct = async ($: cheerio.Root) => {
  //TODO
  return '';
}

export const extractPrice= async ($: cheerio.Root) => {
  //TODO
  return '';
}

export const extractDescription = async ($: cheerio.Root) => {
  //TODO
  return '';
}

export const extractCodeSamples = async ($: cheerio.Root) => {
  //TODO
  return '';
}

export const extractSidebarMenu = async ($: cheerio.Root) => {
  //TODO
  return '';
}

export const extractAuthor = async ($: cheerio.Root) => {
  //TODO
  return '';
}

export const extractPublishDate = async ($: cheerio.Root) => {
  //TODO
  return '';
}

export const extractMainContent = async ($: cheerio.Root) => {
  //TODO
  return '';
}

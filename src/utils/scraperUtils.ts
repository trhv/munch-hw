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
  const productName = $("h1, .product-title").first().text().trim();
  return productName;
}

export const extractPrice = async ($: cheerio.Root) => {
  const price = $("[itemprop=price], .price").first().text().trim();
  return price;
}

export const extractDescription = async ($: cheerio.Root) => {
  const description = $(".product-description").first().text().trim() || "";
  return description;
}

export const extractCodeSamples = async ($: cheerio.Root) => {
  const codeSamples: string[] = $("pre code").slice(0, 3).map((_i, el) => $(el).text().trim()).get();
  return codeSamples;
}

export const extractPublishDate = async ($: cheerio.Root) => {
  const publishedAt = $("time").first().attr("datetime") || $("time").first().text().trim();
  return publishedAt;
}

export const extractAuthor = async ($: cheerio.Root) => {
  const author = $("meta[name=\"author\"]").attr("content") || $("[class*=author]").first().text().trim();
  return author;
}


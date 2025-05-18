import axios from 'axios';
import * as cheerio from 'cheerio';

export const scrape = async (webSiteUrl:string) => {

    // Fetch the HTML content
    const response = await axios.get(webSiteUrl);
    const html = response.data;
    const $ = cheerio.load(html);

    // Extract title
    const title = $('title').text();

    // Meta description
    const metaDescription = $('meta[name="description"]').attr('content') || '';

    return {
      title,
      metaDescription
    }

}; 
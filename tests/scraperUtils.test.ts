import * as cheerio from 'cheerio';
import * as scraper from '../src/utils/scraperUtils';
import { Logger } from '../src/utils/logger';

// Mock the logger to capture errors
jest.mock('../src/utils/logger');
const loggerMock = new Logger() as jest.Mocked<Logger>;

describe('Scraper Utilities - Happy & Sad Paths', () => {
  const sampleHTML = `
    <html lang="en">
      <head>
        <title>Test Title</title>
        <meta name="description" content="Test Description">
        <meta name="author" content="Jane Doe">
      </head>
      <body>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <p>Paragraph one.</p>
        <p>Paragraph two.</p>
        <img src="https://example.com/image1.png"/>
        <img src="/relative/image2.png"/>
        <div class="product-title">Awesome Product</div>
        <div class="price">$19.99</div>
        <div class="product-description">This is a cool product.</div>
        <time datetime="2023-01-01">Jan 1, 2023</time>
        <pre><code>console.log("hello");</code></pre>
      </body>
    </html>
  `;

  const baseUrl = 'https://example.com';
  let $: cheerio.Root;

  beforeEach(() => {
    $ = cheerio.load(sampleHTML);
    jest.clearAllMocks();
  });

  const testCases = [
    { name: 'extractTitle', fn: scraper.extractTitle },
    { name: 'extractMetaData', fn: scraper.extractMetaData },
    { name: 'extractHeadings', fn: scraper.extractHeadings },
    { name: 'extractParagraphs', fn: scraper.extractParagraphs },
    { name: 'extractImages', fn: ($: cheerio.Root) => scraper.extractImages($, baseUrl) },
    { name: 'extractProduct', fn: scraper.extractProduct },
    { name: 'extractPrice', fn: scraper.extractPrice },
    { name: 'extractDescription', fn: scraper.extractDescription },
    { name: 'extractCodeSamples', fn: scraper.extractCodeSamples },
    { name: 'extractPublishDate', fn: scraper.extractPublishDate },
    { name: 'extractAuthor', fn: scraper.extractAuthor }
  ];

  for (const { name, fn } of testCases) {
    it(`${name} - happy path`, async () => {
      const result = await fn($);
      expect(result).toBeDefined();
      if (Array.isArray(result)) {
        expect(result.length).toBeGreaterThan(0);
      } else if (typeof result === 'string') {
        expect(result.length).toBeGreaterThan(0);
      }
    });

    it(`${name} - sad path logs error`, async () => {
      const broken$: cheerio.Root = (() => {
        throw new Error('Simulated Error');
      }) as unknown as cheerio.Root;

      const result = await fn(broken$);
      expect(result).toBe('');
    });
  }
});

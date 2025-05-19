# Website Summary Scraper

This project is a backend service that receives a URL and returns a structured summary of the website’s content by scraping it. The service determines the type of page (article, product, documentation) and uses a strategy pattern to extract relevant data accordingly.

---

## 🚀 Features

- 🔍 Automatically detects page type (`article`, `product`, `documentation`)
- 🧠 Uses Strategy Pattern to handle different page structures
- 📊 Extracts meaningful content like title, description, price, author, and more
- 📦 Modular TypeScript codebase with utility-based architecture
- 📄 Built-in error handling and logging with a custom logger

---

## 🛠 Installation

1. Install dependencies:

```bash
cd website-summary-scraper
npm install
```

2. Create a .env file
```bash
cp .env.example .env
```

3. Start the development server
```bash
npm run dev
```

Server will run at
```bash
http://localhost:3000
```
## 📬 API Usage

Endpoint
```bash
POST /scrape
```

Request Body
```bash
{
  "url": "https://example.com"
}
```

Example using curl
```bash
curl -X POST http://localhost:3000/scrape \
  -H "Content-Type: application/json" \
  -d '{ "url": "https://example.com" }'
```

Example Response (Article Page)
```bash
{
  "pageType": "article",
  "title": "Example Article",
  "metaDescription": "A short summary of the article.",
  "headings": ["Introduction", "Summary"],
  "paragraphs": ["This is the first paragraph...", "Another detail here..."],
  "author": "John Doe",
  "publishedAt": "2024-03-01"
}
```

## 🧪 Running Tests

Run unit tests:
```bash
npm test
```

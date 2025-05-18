import { Router, Request, Response, NextFunction } from 'express';

export class ScrapRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.getRoot);
    this.router.post('/scrap', this.handleScrap);
  }

  private getRoot(req: Request, res: Response, next: NextFunction): void {
    res.send('Website Summary Scraper is running.');
  }

  private handleScrap(req: Request, res: Response, next: NextFunction): void {
    const { url } = req.body;
    res.send(`Starting to scrap: ${url}`);
  }
}

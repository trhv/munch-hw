import { Router, Request, Response, NextFunction } from 'express';
import { scrapeWebsiteHandler} from '../controllers/scrapeController'

export class RootRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.getRoot);
    this.router.post('/scrap', scrapeWebsiteHandler);
  }

  private getRoot(req: Request, res: Response, next: NextFunction): void {
    res.send('Website Summary Scraper is running.');
  }
}

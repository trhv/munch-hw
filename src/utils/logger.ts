
export class Logger {
  private context: string;

  constructor(context: string = 'App') {
    this.context = context;
  }

  private formatMessage(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.context}] [${level.toUpperCase()}] ${message}`;
  }

  info(message: string): void {
    console.log(this.formatMessage('info', message));
  }

  warn(message: string): void {
    console.warn(this.formatMessage('warn', message));
  }

  error(message: string): void {
    console.error(this.formatMessage('error', message));
  }

  debug(message: string): void {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(this.formatMessage('debug', message));
    }
  }
}

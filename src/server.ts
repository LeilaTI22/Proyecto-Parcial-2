import { AngularAppEngine } from '@angular/ssr';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const angularAppEngine = new AngularAppEngine();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await angularAppEngine.handle(req);

    if (response) {
      res.status(response.status).setHeader('Content-Type', 'text/html').send(await response.text());
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
}

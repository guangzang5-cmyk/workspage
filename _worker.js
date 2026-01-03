import { mainHandler } from './core/handler.js';

export default {
  async fetch(request, env) {
      try {
        const url = new URL(request.url);
        const headers = request.headers;
        return await mainHandler({ req: request, url, headers, res: null, env });
      } catch (err) {
        errorLogs('Worker Error:', err);
        return new Response('Worker Error: ' + err.message, { status: 500 });
      }
  },
};